import { Canvas, extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three'
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber'


const WindWakerWaterMaterial = shaderMaterial(
  { uTime: 0,
    uWaterColor: new THREE.Uniform(new THREE.Color('#ff1122')),
    uFoamColor: new THREE.Uniform(new THREE.Color('#ffffff')),
    uTexture: new THREE.Uniform(),
    uUnderLayer: new THREE.Uniform(false)
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
   uniform sampler2D uTexture;

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
       for(int j = -1; j <=1; j++){
           for(int i = -1; i <=1; i++){
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
   
 void main(){
 
    vec2 uv = vUv * 15.0;  // Scale the UVs for resolution control
 
    float musgraveHeight = texture(uTexture, vUv).r;

    uv.y += musgraveHeight  * .25;
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
  const musgraveTexture = useLoader(TextureLoader, "/MusgraveTexture.jpg");

  useFrame(({ clock }) => {
    if (materialRef1.current) materialRef1.current.uTime = clock.getElapsedTime();
    if (materialRef2.current) materialRef2.current.uTime = clock.getElapsedTime();
  });

  return <>
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,3,0]}>
      <planeGeometry args={[25, 25, 1, 1]} />
      <windWakerWaterMaterial 
        ref={materialRef1} 
        uFoamColor = { new THREE.Color('#fffaff') }
        uWaterColor = { new THREE.Color('#30bced') }
        uTexture = { musgraveTexture }
        transparent={true}
      />
    </mesh>

    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,2.5,0]}>
      <planeGeometry args={[15, 15, 1, 1]} />
      <windWakerWaterMaterial 
        ref={materialRef2} 
        uFoamColor = { new THREE.Color('#333333') }
        uWaterColor = { new THREE.Color('#347c92') }
      />
    </mesh>
  </>
}