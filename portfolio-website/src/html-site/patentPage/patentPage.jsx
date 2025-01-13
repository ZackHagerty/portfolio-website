import './patentPage.scss';

export default function PatentPage(){
    
    return <>
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
    </>
}
