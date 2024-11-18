import Scene from '../../three.js/scene'
import Navbar from '../../utility/navbar/navbar'
import './HomePage.css'


export default function HomePage()
{
    return <>
        <section className='header'>
            {/* <Navbar />  */}
            <Scene/>
           
        </section>
        <section className='experience'>
            <div clasName='experience__header'>
                <h3 className='experience__title'>Experience</h3>
                <hr className='experience__divider'/>
            </div>
            <div className='experience-block__head'>
                <div className="circle"></div>
                <div className='experience-block__job'>
                    <h3 className="experience-block__sub-title">Software Engineer - Flexjet</h3>
                    <p className="experience-block__description">Description</p>
                </div>
            </div>
            <div className='experience__block--body'></div>            
            <div className='experience__block--tail'></div>            
        </section>
        <section className='patent'>
            <div className='experience__header'>
                <h3 className='experience__title'>Patents</h3>
                <hr className='experience__divider'/>
            </div>
            <div className="patents-body">
            <div className="patent-container">
                <h4>Fleet Optimizer</h4>
                <hr className='experience__divider utility__spacer'/>
                <p>
                   This patent outlines a project that dynamically allocates aircraft to establish an acceptable flight schedule, 
                   taking into account requests and the availability of associated crews. The computer can repeatedly run the algorithm as 
                   scheduling requests are updated.
                </p>
                <div className='patent-footer'>
                    <button className='patent__button'>Read more</button>
                </div>
            </div> 
            <div className="patent-container">
            <h4>Demand Forecasting For Transportation Services</h4>
            <hr className='experience__divider utility__spacer'/>
                <p>
                    This patent outlines a project that utilizes machine-learning techniques to predict the demand of aircraft, by type, 
                    for a company.
                </p>
                <div className='patent-footer'>
                    <button className='patent__button'>Read more</button>
                </div>
            </div>   
            </div>         
        </section>
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