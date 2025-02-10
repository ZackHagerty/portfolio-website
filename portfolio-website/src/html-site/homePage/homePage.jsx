import Scene from '../../three.js/scene'
import Experience from './experience/experience'
import './homePage.scss'
import Education from './education/education'


export default function HomePage()
{
    return <>
        <section className='header'>
            <Scene/>
        </section>
        <Experience/>
        <Education />    
    </>
}