
import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as THREE from 'three'


extend({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree();
    return <>
    
        <directionalLight position = { [ 1, 2, 3 ] } intensity={ 3.5} />
        <ambientLight intensity = { 1.5 }></ambientLight>
        <orbitControls args = { [camera, gl.domElement ]} enableZoom={false} />

        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <planeGeometry args = {[45, 45, 20, 20]}/>
            <meshStandardMaterial color="red" side= { THREE.DoubleSide} wireframe= { true} />
        </mesh>

    </>
}