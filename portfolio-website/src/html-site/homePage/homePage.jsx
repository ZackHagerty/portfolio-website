import Scene from '../../three.js/scene'
import Navbar from '../../utility/navbar/navbar'
import Experience from './experience/experience'
import './homePage.scss'
import Patents from './patents/patents'


export default function HomePage()
{
    return <>
        <section className='header'>
            {/* <Navbar />  */}
            <Scene/>
        </section>
        <Experience/>
        <Patents />
        <section className='experience'>
            <div className='experience__header'>
                <h3 className='experience__title'>Projects</h3>
                <hr className='experience__divider'/>
            </div>
            <div className="patents-body">
            <div className="patent-container">
                <h4>Fleet Optimizer</h4>
                <p></p>
   
            </div> 
            <div className="patent-container">
                <h4>Demand Forecasting For Transportation Services</h4>
                <p></p>
            </div>   
            </div>         
        </section>
        <section className='experience'>
            <div className='experience__header'>
                <h3 className='experience__title'>Education</h3>
                <hr className='experience__divider'/>
            </div>
            <div className="patents-body">
            <div className="patent-container">
                <h4>Placeholder</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nisi, dignissimos cumque voluptatibus aliquam nam labore totam dolorem voluptate quibusdam ipsa qui nulla mollitia sunt rem sequi. Fugit, amet repudiandae!</p>
            </div> 
            <div className="patent-container">
                <h4>Placeholder</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit nisi, dignissimos cumque voluptatibus aliquam nam labore totam dolorem voluptate quibusdam ipsa qui nulla mollitia sunt rem sequi. Fugit, amet repudiandae!</p>
            </div>   
            </div>         
        </section>
        
    </>
}