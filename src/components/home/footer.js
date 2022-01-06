import { BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import '../../App.css'

const Footer =()=>{

    return(
        <footer className='footer'>
                <div className='footer__container container grid'>
                    <div className='footer__content'>
                        <div>
                        <h1 className='footer__title'> Mehdi</h1>
                        <span className='footer__subtitle'> FullStack developer</span>
                        </div>
                        <ul className='footer__links'>
                            <li>
                                <a href='#services' className='footer__link'>Services</a>
                            </li>

                            <li>
                                <a href='#about' className='footer__link'>About</a>
                            </li>

                            <li>
                                <a href='#contact' className='footer__link'>Contact</a>
                            </li>
                            
                        </ul>

                        <div className='footer__socials'>
                            <a href='https://www.facebook.com/mehdi.lalout.92/' target='_blank' className='footer__social'>
                                <FaFacebookSquare />
                            </a>

                            <a href='https://www.instagram.com/mehdi._.lt/' target='_blank' className='footer__social'>
                                <BsInstagram />
                            </a>
                            
                            <a href='https://twitter.com/mehdilaloutdido' target='_blank' className='footer__social'>
                                <FiTwitter />
                            </a>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer