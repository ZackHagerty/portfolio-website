import Navbar from '../../utility/navbar/navbar'
import './HomePage.css'

export default function HomePage()
{
    return <>
        <section className='header'>
            <Navbar /> 
            <div className="header__container">
                <h1 className='header__name'>Zack Hagerty</h1>
                <h4 className='header__description'>
                    Software Engineer based in Daytona Beach, Florida.
                </h4>
                <p className="header__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti reprehenderit velit rerum vel voluptate sequi.</p>
                <p className="header__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti reprehenderit velit quam debitis, ut provident! Libero illo maiores incidunt!</p>
                <p className="header__description">Lorem ipsum dolor sit amet consectetur adipisicing elit.  Libero illo maiores incidunt!</p>
            </div>
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
        <section className='experience'>
            <div clasName='experience__header'>
                <h3 className='experience__title'>Patents</h3>
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
        <section className='experience'>
            <div clasName='experience__header'>
                <h3 className='experience__title'>Projects</h3>
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
        <section className='experience'>
            <div clasName='experience__header'>
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