import './experience.css';

export default function Experience(){
    
    return <>
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
    </>
}