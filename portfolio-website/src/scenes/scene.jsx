
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import Experience from './experience'

export default function Scene()
{
    
    const cameraSettings =
    { 
        fov: 45, 
        near: 0.1, 
        far: 200, 
        position: [3, 2, 6]
    } 

    const glSettings = 
    {
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping
    }

    return  <Canvas dpr={ [1,2] } flat gl={ glSettings } camera={ cameraSettings }>          
        <Html position={[-8, 3.5, 0]} className="header__container">
            <h1 className='header__name'>Zack Hagerty</h1>
            <h4 className='header__description'>
                Software Engineer based in Daytona Beach, Florida.
            </h4>
            <p className="header__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti reprehenderit velit rerum vel voluptate sequi.</p>
            <p className="header__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti reprehenderit velit quam debitis, ut provident! Libero illo maiores incidunt!</p>
            <p className="header__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Libero illo maiores incidunt!</p>
            </Html>
        <Experience />

        </Canvas>
}