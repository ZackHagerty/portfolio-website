
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Html, AdaptiveDpr } from '@react-three/drei'
import Experience from './experience'
import './scene.scss';

export default function Scene()
{
    
    const cameraSettings =
    { 
        fov: 45, 
        near: 0.1, 
        far: 30, 
        position: [3, 5, 6]
    } 

    const glSettings = 
    {
        antialias: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping
    }

    return  <Canvas 
                dpr={ [1,2] }
                gl={ glSettings } 
                camera={ cameraSettings }
                shadows={false}
                performance={{
                    min: 0.1,
                    max: 0.9
                }}
                >          
        {/* <Html as='div' wrapperClass={'header__container'} fullscreen={true}>
            <h1 className='header__title'>Zack Hagerty</h1>
            <h4 className='header__subtitle'> 
                Engineer with a proven track record of delivering consistent results
            </h4>
            <p className="header__description">
                I'm constantly challenging myself to embue professional work with creativity in a way that exceeds expectations. <br/>
                When I'm not coding, I'm rock climbing, boxing, or building something.
            </p>
        </Html> */}
        <Experience />
        </Canvas>
}