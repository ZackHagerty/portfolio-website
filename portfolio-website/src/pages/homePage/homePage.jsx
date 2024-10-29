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
        <section className='body'>
            
        </section>
    </>
}