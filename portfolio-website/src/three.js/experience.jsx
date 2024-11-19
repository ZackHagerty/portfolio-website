
import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { ToneMapping, EffectComposer, Pixelation } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import { Sky } from "@react-three/drei"

import { Water } from './objects/water'

extend({ OrbitControls })

export default function Experience()
{
    const { camera, gl } = useThree();
    return <>
    
        {/* <directionalLight position = { [ 1, 2, 3 ] } intensity={ 3.5} /> */}
        <ambientLight intensity = { 1.5 }></ambientLight>
        {/* <orbitControls args = { [camera, gl.domElement ]} enableZoom={false} /> */}

        <Sky sunPosition={[100, 5, 100]} />

        <EffectComposer>
            <ToneMapping mode={ ToneMappingMode.ACES_FILMIC } />
            <Pixelation></Pixelation>
        </EffectComposer>

        <Water/>

    </>
}54