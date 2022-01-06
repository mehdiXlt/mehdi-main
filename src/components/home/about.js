import '../../App.css'
import Prog from '../img/prog.jpg'
import RubberBand from 'react-reveal/RubberBand'
import { AiOutlineCloudDownload } from 'react-icons/ai'


const About =()=>{
    return(
        <section className='about section' id='about'>
            <h2 className='section__title bounce'> 
            <RubberBand >
                About Me
            </RubberBand>
            </h2>
            <span className='section__subtitle'>My Introduction</span>

            <div className='about__container container grid'>
                <img src={Prog} className='about__img' />
                <div className='about__data'>
                    <p className='about__description'>
                        Web developer, Working in web design and technologie , delivering quality work
                    </p>

                    <div className='about__info'>
                        <div>
                            <RubberBand >
                            <span className='About__info-title'>04+</span>
                            </RubberBand>
                            <span className='about__info-name'>Month <br/> experience</span>
                        </div>

                        <div>
                            <RubberBand>
                            <span className='About__info-title'>10+</span>
                            </RubberBand>
                            <span className='about__info-name'>Completed <br/> Project</span>
                        </div>

                        <div>
                            <RubberBand >
                            <span className='About__info-title'>02+</span>
                            </RubberBand>
                            <span className='about__info-name'>Companies<br/> worked with</span>
                        </div>
                        
                    </div>

                    <div className='about__buttons'>
                        <a href="../img/Lalout_mehdi_CV.pdf" download  className='button button--flex'>
                            download CV <AiOutlineCloudDownload className='button__icon'/>
                        </a>
                    </div>
                    
                </div>
                
            </div>

        </section>
    )
}

export default About