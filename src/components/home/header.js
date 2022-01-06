import '../../App.css'
import { useState } from 'react'

// ::: icons ::: //
import {HiHome} from 'react-icons/hi'
import {IoClose, IoPersonOutline} from 'react-icons/io5'
import {CgFileDocument} from 'react-icons/cg'
import {BsBag} from 'react-icons/bs'
import {AiOutlineAppstore, AiOutlinePicture} from 'react-icons/ai'
import {BiMessageSquareDetail}from 'react-icons/bi'


const Header =() =>{
    
    // ::: function to show the navbar on phone device ::: //

    const [showNav , setShowNav] = useState(false)

    return(
        <div className='header' id='header'>
            <nav className='nav container'>
                <a href='#' className='nav__logo'>  Mehdi </a>

                <div className={`nav__menu ${showNav && 'show-menu'}`} id='nav-menu'>
                    <ul className='nav__list grid'>

                        <li className='nav__item'>
                            <a href="#home" className='nav__link'>
                                <HiHome className='nav__icon'/>Home
                            </a>
                        </li>

                        <li className='nav__item ' onClick={()=>{
                            setShowNav(false)
                        }}>
                            <a href='#about' className='nav__link'>
                                <IoPersonOutline className='nav__icon'/> About Me
                            </a>
                        </li>
                        
                        <li className='nav__item' onClick={()=>{
                            setShowNav(false)
                        }}>
                            <a href='#skills' className='nav__link'>
                                <CgFileDocument className='nav__icon'/>Skills
                            </a>
                        </li>

                        <li className='nav__item' onClick={()=>{
                            setShowNav(false)
                        }}>
                            <a href='#services' className='nav__link'>
                                <BsBag className='nav__icon'/> Services
                            </a>
                        </li>

                        <li className='nav__item' onClick={()=>{
                            setShowNav(false)
                        }}>
                            <a href='#Portfolio' className='nav__link'>
                                <AiOutlinePicture className='nav__icon'/>Portfolio
                            </a>
                        </li>

                        <li className='nav__item' onClick={()=>{
                            setShowNav(false)
                        }}>
                            <a href='#contact' className='nav__link'>
                                <BiMessageSquareDetail className='nav__icon'/> Contact Me
                            </a>
                        </li>
                    </ul>

                            {/* close button */}
                            <IoClose className='nav__close' id='nav-close' onClick={()=>{
                                setShowNav(false)
                            }}/>
                    
                </div>

                <div className='nav__btns'>
                    <div className='nav__toggle' id='nav-toggle'>
                        <AiOutlineAppstore onClick={()=>{
                            setShowNav(true)
                        }}/>
                    </div>
                </div>
                
                
            </nav>
        </div>
    )
}

export default Header