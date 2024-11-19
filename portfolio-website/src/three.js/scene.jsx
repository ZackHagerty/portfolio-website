
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import Experience from './experience'
import './scene.css';

export default function Scene()
{
    
    const cameraSettings =
    { 
        fov: 45, 
        near: 0.1, 
        far: 200, 
        position: [3, 5, 6]
    } 

    const glSettings = 
    {
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping
    }

    return  <Canvas dpr={ [1,2] } flat gl={ glSettings } camera={ cameraSettings }>          
        <Html as='div' wrapperClass={'header__container'} fullscreen={true}>
            <h1 className='header__title'>Zack Hagerty</h1>
            <h4 className='header__subtitle'> 
                Engineer with a proven track record of delivering consistent results
            </h4>
            <p className="header__description">
                I'm constantly challenging myself to embue professional work with creativity in a way that exceeds expectations. <br/>
                When I'm not coding, I'm rock climbing, boxing, or building something.
            </p>
        </Html>
        <Experience />

        </Canvas>
}