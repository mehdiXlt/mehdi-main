import '../../App.css'
import {HiOutlinePencil} from 'react-icons/hi'
import {FaArrowRight, FaTimes} from 'react-icons/fa'
import { BsCheckCircle } from 'react-icons/bs'
import {FiCode} from 'react-icons/fi'
const Services =()=>{
    const modalViews = document.querySelectorAll('.service__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')

    let modal = function(modalClick){
        modalViews[modalClick].classList.add('active-modal')
    }

    modalBtns.forEach((modalBtn, i) =>{
        modalBtn.addEventListener('click' , ()=>{
            modal(i)
        })
    })

    modalClose.forEach((modalClose) =>{
        modalClose.addEventListener('click' , ()=>{
            modalViews.classList.remove('active-modal')
        })
    })


    return(
        <section className='services section' id='services'>
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What I Offer</span>

            <div className='services__container container grid'>
                {/* === */}
                <div className='services__content'>
                    <div>
                        <HiOutlinePencil className='services__icon'/>
                        <h3 className='services__title'> LOGO <br /> creator</h3>
                    </div>

                    <span className='button button--flex button--small button--link serices__button'>
                        View More
                        <FaArrowRight className='button__icon'/>
                    </span>

                    <div className='services__modal'>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'> Ui/Ux <br/> designer</h4>
                            <FaTimes className='services__modal-close'/>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p>Web page interface.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p>I position your company brand .</p>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>

                 {/* === */}
                 <div className='services__content'>
                    <div>
                        <FiCode className='services__icon'/>
                        <h3 className='services__title'> FullStack <br /> Developer</h3>
                    </div>

                    <span className='button button--flex button--small button--link serices__button'>
                        View More
                        <FaArrowRight className='button__icon'/>
                    </span>

                    <div className='services__modal'>
                        <div className='services__modal-content'>
                            <h4 className='services__modal-title'> Frontend <br/> Developer</h4>
                            <FaTimes className='services__modal-close'/>

                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p>I develop the user interface.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p>Web page interface.</p>
                                </li>

                                <li className='services__modal-service'>
                                    <BsCheckCircle className='services__modal-icon'/>
                                    <p>I position your company brand .</p>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}

export default Services