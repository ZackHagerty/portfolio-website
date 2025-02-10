import './education.scss';

export default function Education(){
    
    return <>
    <section className='education'>
        <div className='education__header'>
            <h3 className='education__title'>Education</h3>
        </div>
        <div className="education-body">
            <div className="education-container">
                <h4 className="education-container__title">Bachelors in Software Engineering - 2023</h4>
                <hr className='education-container__divider utility__spacer'/>
                <p className="education-container__body">
                    Acquired from Embry-Riddle Aeronautical University in May of 2023. Graduated with a GPA of 3.83.
                    Worked for several years as a Resident Advisor and a virtual reality software developer.  
                </p>
            </div> 
            <div className="education-container">
                <h4 className="education-container__title">Masters in Software Engineering - 2024</h4>
                <hr className='education-container__divider utility__spacer'/>
                <p className="education-container__body">
                    Acquired from Embry-Riddle Aeronautical University in May of 2024. Graduated with distinction at a GPA of 4.0.
                </p>
           </div>   
        </div>         
    </section>
    </>
}
