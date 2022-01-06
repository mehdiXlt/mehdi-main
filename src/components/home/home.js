import '../../App.css'
import {FiFacebook, FiGithub, FiMail} from 'react-icons/fi'
import {BiMessageSquareDetail, BiMouse} from 'react-icons/bi'
import { AiOutlineDown } from 'react-icons/ai'
import RubberBand from 'react-reveal/RubberBand'
import {Parallax} from 'react-scroll-parallax'

const Home =()=>{


return(
    <section className='home section' id='home'>
        <div className='home__container container grid'>
            <div className='home__content grid'>
                <div className='home__social'>
                    
                    <a href='https://github.com/mehdiXlt' target='_blank' className='home__social-icon'>
                        <FiGithub />
                    </a>

                    <a herf='https://www.facebook.com/mehdi.lalout.92/' target='_blank' className='home__social-icon'>
                        <FiFacebook />
                    </a>

                    <a herf='mailto: laloutme@gmail.com' target='_blank' className='home__social-icon'>
                        <FiMail/>
                    </a>

                </div>

                <Parallax y={[-10 , 10]} tagOuter="figure">
                    <div className='home__img'>

                        <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <mask id="mask0" mask-type="alpha">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                                <image className="home__blod-img" href=""/>
                            </g>
                        </svg>

                    </div>

                </Parallax>
            </div>

            <div className='home__data'>
                

                <h1 className='home__title'>
                    <RubberBand cascade>
                        <span className='bounce'> H </span>
                        <span className='bounce'> e </span>
                        <span className='bounce'> l </span>
                        <span className='bounce'> l </span>
                        <span className='bounce'> o </span>
                        <span className='bounce'> , </span>
                        <span> </span>
                        <span className='bounce'> I </span> 
                        <span className='bounce'> a </span>
                        <span className='bounce'> m </span>
                        <span>  </span>
                        <span className='bounce'> M </span>
                        <span className='bounce'> e </span>
                        <span className='bounce'> h </span>
                        <span className='bounce'> d </span>
                        <span className='bounce'> i </span>
                    </RubberBand>
                </h1>

        
                <h3 className='home__subtitle'> 
                    <RubberBand cascade>
                        Fullstack developer
                    </RubberBand>
                </h3>
                
                <p className='home__description'>
                    <RubberBand cascade>
                     Welcome to my website
                    </RubberBand> 
                </p>

                <a href='#contact' className='button button--flex'>
                    Contact Me <BiMessageSquareDetail  className='button__icon'/>
                </a>
            </div>


            <div className='home__scroll'>
                <a herf='#about' className='home__scroll-button button--flex'>
                    <BiMouse className='home__scroll-mouse'/>
                    <span className='home__scroll-name'>Scroll down</span>
                    <AiOutlineDown className='home__scroll-arrow'/>
                </a>
            </div>
        </div>

        
    </section>
)}

export default Home