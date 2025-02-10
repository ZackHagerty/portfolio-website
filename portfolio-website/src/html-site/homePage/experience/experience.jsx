import './experience.scss';

export default function Experience(){
    
    return <>
        <section className='experience'>
            <h2 class="experience__title">Experience</h2>
            <hr></hr>
            <div className="experience__container">
                <div className="jobs">
                    <h3 className="jobs__header">Work</h3>
                    <div className="card">
                        <div className="card__body">
                            <div className="card__body-header">
                                <span className="card__title">Flexjet - Software Engineer</span>
                                <span className="card__title">2021 - Present</span>
                            </div>
                            <hr></hr>
                            <p className="card__description">Currently utilizing .NET and Angular to create efficient full-stack aviation software in a fulltime position. 
                                I also train our interns in preparation for full-time positions!</p>
                        </div>
                        <div className="card__image">
                            <img src="https://flexjet.com/wp-content/uploads/2015/08/slider1_64C4373_L450_retouch_v3.jpg" alt="A jet soaring through the sky" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__body">
                            <div className="card__body-header">
                                <span className="card__title">Unity Technologies Intern - Quality Assurance</span>
                                <span className="card__title">2021</span>
                            </div>
                            <hr></hr>
                            <p className="card__description">Carried out extensive testing on projects to ensure that each project met customer demands and fulfilled development requirements as we approached deployment.
                            Became an official Nintendo developer as I worked as QA on the Outer Wilds Switch port, released in early 2024.</p>
                        </div>
                        <div className="card__image">
                            <img src="https://logos-world.net/wp-content/uploads/2023/01/Unity-Logo.png" alt="The Unity Technologies Logo" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__body">
                            <div className="card__body-header">
                                <span className="card__title">ERAU - Virtual Reality Software Engineer</span>
                                <span className="card__title">2020 - 2022</span>
                            </div>
                            <hr></hr>
                            <p className="card__description">Worked on a virtual reality program in Unity used to train pilots how to avoid several types of vestibular and non-vestibular illusions while operating a plane.</p>
                        </div>
                        <div className="card__image">
                            <img src="https://media.licdn.com/dms/image/v2/C4E2DAQFwijGdgHxTkg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1640025225796?e=1739772000&v=beta&t=19WLbJ6ZOkPWvrRrF7fdZ3dQP7D7oUYo1Ux05u7CFBY" alt="An orange painted blue, cut in half laying on a blue background" />
                        </div>
                    </div>
                </div>
                <div className="patents">
                    <h3 className="patents__header">Patents</h3>
                    <div className="patent-container">
                        <h4 className="patent-container__title">Fleet Optimizer</h4>
                        <hr className='patent-container__divider utility__spacer'/>
                        <p className="patent-container__body">
                            This patent outlines a project that dynamically allocates aircraft to establish an acceptable flight schedule, 
                            taking into account requests and the availability of associated crews. The computer can repeatedly run the algorithm as 
                            scheduling requests are updated.
                        </p>
                        <div className='patent-container__footer'>
                            <form action="https://patents.google.com/patent/US20240211834A1/en">
                                <button className='patent-container__button'>Read more</button>
                            </form>
                        </div>
                    </div> 
                    <div className="patent-container">
                        <h4 className="patent-container__title">Demand Forecasting For Transportation Services</h4>
                        <hr className='experience__divider utility__spacer'/>
                        <p className="patent-container__body">
                            This patent outlines a project that utilizes machine-learning techniques to predict the demand of aircraft, by type, 
                            for a company.
                        </p>
                        <div className='patent-container__footer'>
                            <form action="https://patents.google.com/patent/US20230230111A1/en">
                                <button className='patent-container__button'>Read more</button>
                            </form>
                        </div>
                    </div>   
                </div>    
            </div>
        </section>
    </>
}