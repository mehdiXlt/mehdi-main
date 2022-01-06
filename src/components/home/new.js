import { FiSend } from 'react-icons/fi'
import '../../App.css'


const Project =()=>{

    return(
        <section className='project section'>
            <div className='project__bg'>
                <div className='project__container container grid'>
                    <h2 className='project__title'>You Have a New project in mind</h2>
                    <span className='project__description'>Contact me now to make of you project a reality.</span>

                    <a href='#contact' className='project-btn button button--flex button--white'>
                        Contact Me
                        <FiSend className='project__icon button__icon'/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Project