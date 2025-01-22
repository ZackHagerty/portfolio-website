export function InfoPlane({ title, description })  {
    
    return <>
        <div className='info-plane'>
            <h4>{title}</h4>
            <hr className='experience__divider utility__spacer'/>
            <p>{description}</p>
        </div>
    </>
}