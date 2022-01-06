import { HiOutlineBriefcase } from 'react-icons/hi'
import { IoMdSchool } from 'react-icons/io'
import { IoCalendar } from 'react-icons/io5'
import '../../App.css'

const Qualification =()=>{

    return(
        <section className=' qualification section'>
            
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My personal journey</span>

            <div className='qualificaion__container container'>
                <div className='qualification__tabs'>
                    <div className='qualification__button button--flex'>
                        <IoMdSchool className='qualifiaction__icon'/>
                        Education
                    </div>


                    <div className='qualification__button button--flex'>
                        <HiOutlineBriefcase className='qualification__icon'/>
                        Work
                    </div>
                </div>

                <div className='qualification__section'>
                    {/* ======= Qualification content 1 ====== */}
                    <div className='qualification__content qualification__active' >

                        {/* ======================================== */}

                        <div className='qualification__data'>
                            <div></div>
                            
                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                             
                            <div>
                                <h3 className='qualification__title'> head of the IT unit</h3>
                                <span className='qualification__subtitle'> Dixprod securite </span>
                                <div className='qualification__calender'>
                                    <IoCalendar />
                                    2019 - 2020
                                </div>
                            </div>


                        </div>
                        

                        {/* ======================================== */}

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'> English diploma </h3>
                                <span className='qualification__subtitle'> bouchaoui - BBC school </span>
                                <div className='qualification__calender'>
                                    <IoCalendar />
                                    2016 - 2018
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>
                        </div>
                        
                        
                    </div>
                    

                    {/* ======= Qualification content 2 ====== */}
                    <div className='qualification__content'  >

                    {/* ======================================== */}
                            
                    <div className='qualification__data'>
                        <div></div>
                            
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                            
                        <div>
                            <h3 className='qualification__title'>free lancer </h3>
                            <span className='qualification__subtitle'> lunch of a new start up </span>
                            <div className='qualification__calender'>
                                <IoCalendar />
                                2021 ...?
                            </div>
                        </div>
                    </div>
                            
                    {/* ======================================== */}
                            
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'> Fullstack developer</h3>
                            <span className='qualification__subtitle'> bebezzouar - GoMyCode </span>
                            <div className='qualification__calender'>
                                <IoCalendar />
                                2021 - 2022
                            </div>
                        </div>
                            
                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>

                        </div>
                    </div>

                    </div>


                    {/* ================================== */}
                    <div className='qualification__content'  >

                        {/* ======================================== */}

                        <div className='qualification__data'>
                            <div></div>

                            <div>
                                <span className='qualification__rounder'></span>
                                <span className='qualification__line'></span>
                            </div>

                            <div>
                                <h3 className='qualification__title'>???</h3>
                                <span className='qualification__subtitle'> ???</span>
                                <div className='qualification__calender'>
                                    <IoCalendar />
                                    ???
                                </div>
                            </div>
                        </div>

                        {/* ======================================== */}

                        <div className='qualification__data'>
                            <div>
                                <h3 className='qualification__title'> UX/UI design</h3>
                                <span className='qualification__subtitle'>val d'hydra - GoMyCode</span>
                                <div className='qualification__calender'>
                                    <IoCalendar />
                                    2022- present time
                                </div>
                            </div>

                            <div>
                                <span className='qualification__rounder'></span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualification