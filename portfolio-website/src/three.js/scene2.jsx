
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Html, AdaptiveDpr } from '@react-three/drei'
import Experience from './experience'
import './scene.scss';
export default function Scene2()
{

    const cameraSettings = {
        fov: 45,
        near: 0.1, 
        far: 30,
        position: [3, 5, 6]
    }

    const glSettings = {
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
                }}>          
                <Html as='div' wrapperClass={'header__container'} fullscreen={true}>
                    <h1 className='header__title'>Zack Hagerty</h1>
                    <h4 className='header__subtitle'> 
                        Engineer with a proven track record of delivering consistent results
                    </h4>
                    <div className="header__links">
                        <a href="https://github.com/ZackHagerty" target="_blank" rel="noopener noreferrer">
                            <svg class="header__icon">
                                <use href="github.svg#github-icon"></use>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/zackaryhagerty/" target="_blank" rel="noopener noreferrer">
                            <svg class="header__icon">
                                <use href="linkedin.svg#linkedin-icon"></use>
                            </svg>
                        </a>
                    </div>
                </Html>
                <Experience />
            </Canvas>
}