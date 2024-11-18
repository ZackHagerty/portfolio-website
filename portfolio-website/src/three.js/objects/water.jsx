import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three'

const WindWakerWaterMaterial = shaderMaterial(
  { uTime: 0,
    uWaterColor: new THREE.Color('#ff1122'),
    uFoamColor: new THREE.Color('#ffffff')
   }, 
  ` // Vertex Shader
    varying vec2 vUv;
    varying vec3 vPosition;

    uniform float uTime;
    uniform vec3 uWaterColor;
    uniform vec3 uFoamColor;

    void main() {
    vUv = uv;
    vPosition = position;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,

  ` // Fragment Shader
    varying vec2 vUv;
    uniform float uTime;  // Optional: Use for animation if needed

    uniform vec3 uWaterColor;
    uniform vec3 uFoamColor;

    float stop1 = .025;
    float stop2 = .065;


    vec3 white = vec3(1.000, 1.000, 1.000);
    vec3 black = vec3(0.0, 0.0, 0.0);
    
    float vectorLength(vec2 vector)
    {
        return length(vector);
    }
    
    vec2 Hash_2D_to_2D(vec2 k){
        vec2 st = vec2(dot(k,vec2(134.4,314.0)),dot(k,vec2(932.9,141.301)));
        return fract(sin(st)*39145.295039);
    }
    
    vec3 Hash_2D_to_3D(vec2 k){
        vec3 st = vec3(dot(k,vec2(134.5,234.4)),dot(k,vec2(492.2,391.3)),dot(k,vec2(193.03,920.0)));
        return vec3(fract(sin(st) * 3945.2040));
    }
    
    float voronoi_f1_2d(vec2 coord, float randomness) {
        vec2 cellPosition = floor(coord);
        vec2 localPosition = coord - cellPosition;
        
        float minDistance = 8.0f;
        vec2 targetOffset = vec2(0);
        vec2 targetPosition = vec2(0);    
        for(int j = -1; j <= 1; j++){
            for(int i = -1; i<=1; i++){
                vec2 cellOffset = vec2(i,j);
                vec2 pointPosition = cellOffset + Hash_2D_to_2D(cellPosition + cellOffset) * randomness;
                
                float distanceToPoint = vectorLength(localPosition - pointPosition);
                if(distanceToPoint < minDistance){
                    minDistance = distanceToPoint;
                    targetOffset = cellOffset;
                    targetPosition = pointPosition;
                }
            }
        }
        return minDistance;
    }
    
    
    //smooth F1
    float voronoi_smooth_f1_2d(vec2 coord, float smoothness, float randomness){
        vec2 cellPosition = floor(coord);
        vec2 localPosition = coord - cellPosition;
    
        float smoothDistance = 8.0f;
        vec3 smoothColor = vec3(0.0);
        vec2 smoothPosition = vec2(0.0);
        //探索範囲が５＊５なのはsmoothnessが大きいと他のセルの影響が大きくなり３＊３だと不十分なため
        for(int j = -2; j <=2; j++){
            for(int i = -2; i <=2; i++){
                vec2 cellOffset = vec2(i,j);
                vec2 pointPosition = cellOffset + Hash_2D_to_2D(cellPosition + cellOffset) * randomness;
    
                float distanceToPoint = vectorLength(localPosition - pointPosition);
                
                //Polynomial Smooth minimum
                //https://wiki.blender.org/wiki/User:OmarSquircleArt/GSoC2019/Documentation/Smooth_Voronoi
                float h = smoothstep(0.0f,1.0f,0.5f + 0.5f * (smoothDistance - distanceToPoint) / smoothness);
                float correctionFactor = smoothness * h * (1.0 - h);
                smoothDistance = mix(smoothDistance,distanceToPoint,h) - correctionFactor;
    
                //上のスムーズをそのままカラーやポジションに掛けるとぼかしが強いためにcorrectionFactorに変化を付けている？
                correctionFactor /= 1.0f + 3.0f * smoothness;
                vec3 cellColor = Hash_2D_to_3D(cellPosition + cellOffset);
                smoothColor = mix(smoothColor,cellColor,h) - correctionFactor;
                smoothPosition = mix(smoothPosition,pointPosition,h) - correctionFactor;
            }
        }
        return smoothDistance;
    }

    // Simplex 2D noise
    //
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
        dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    // Musgrave fBM Function
    float noise_musgrave_fBm_2d(vec2 coord, float H, float lacunarity, float octaves)
    {
      vec2 p = coord;
      float value = 0.0f;
      float pwr = 1.0f;
      float pwHL = pow(lacunarity, -H);

      for (int i = 0; i < int(octaves); i++) {
        value += snoise(p) * pwr;
        pwr *= pwHL;
        p *= lacunarity;
      }

      float rmd = octaves - floor(octaves);
      if (rmd != 0.0f) {
        value += rmd * snoise(p) * pwr;
      }

      return value;
    }
    
  void main(){
  
      vec2 uv = vUv * 15.0;  // Scale the UVs for resolution control

      float musgraveNoise = noise_musgrave_fBm_2d(uv, .030, 2.0, 2.0);
      uv.y += musgraveNoise * .075;
      uv += uTime * .06;  // Animate the pattern by adding uTime to the UV coordinates
  
      float f1Noise = voronoi_f1_2d(uv, 1.0);
      float smoothF1 = voronoi_smooth_f1_2d(uv, .450, 1.0);
  
      float clampFactor = f1Noise - smoothF1; 
      
      vec4 emission = vec4(uFoamColor * 8.0, 1.0);
      vec4 transparentBDSF = vec4(uWaterColor, 1.0);
  
      vec4 rampColor = vec4(mix(white, black, smoothstep(0.06, 0.150, clampFactor)), .6);
      gl_FragColor = vec4(mix(emission, transparentBDSF, rampColor).xyz, 0.6);
  }
  `
);

extend({ WindWakerWaterMaterial });

export function Water() {
  const materialRef1 = useRef();
  const materialRef2 = useRef();

  useFrame(({ clock }) => {
    if (materialRef1.current) materialRef1.current.uTime = clock.getElapsedTime();
    if (materialRef2.current) materialRef2.current.uTime = clock.getElapsedTime();
  });

  return <>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,3,0]}>
      <planeGeometry args={[30, 30, 1, 1]} />
      <windWakerWaterMaterial 
        ref={materialRef1} 
        uFoamColor = { new THREE.Color('#fffaff') }
        uWaterColor = { new THREE.Color('#30bced') }
        transparent={true}
      />
    </mesh>

    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[30, 30, 1, 1]} />
      <windWakerWaterMaterial 
        ref={materialRef2} 
        uFoamColor = { new THREE.Color('#313131') }
        uWaterColor = { new THREE.Color('#347c92') }
        transparent={true}
      />
    </mesh>
  </>
}