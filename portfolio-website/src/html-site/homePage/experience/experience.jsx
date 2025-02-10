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
                    <img src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNDcwMTUwOQ&ixlib=rb-1.2.1&q=85" alt="An orange painted blue, cut in half laying on a blue background" />
                        <h3 className="card__title"> Title</h3>
                        
                    </div>
                    <div className="card">
                        
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
                            <button className='patent-container__button'>Read more</button>
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
                            <button className='patent-container__button'>Read more</button>
                        </div>
                    </div>   
                </div>    
            </div>
        </section>
    </>
}