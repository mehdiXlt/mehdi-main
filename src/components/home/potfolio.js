import '../../App.css'
import Portfoli from '../img/portfolio.png'
import Propertee from '../img/propertee.png'
import Boutique from '../img/boutique.png'


const Portfolio =()=>{

    return(
        <section className='portfolio section' id='portfolio'>
            <h2 className='portfolio__title'>Portfolio</h2>
            <span className='portfolio__subtitle'>Most recent work</span>

            <div className='portfolio__container container'>
                <div className='portfolio__content '>
                    <div className='portfolio__img'>
                        <img alt='' src={Portfoli}/>
                    </div>
                    <div className='portfolio__data'>
                        <h3 className='project_title'>Portfolio exmaple</h3>
                        <span className='project__subtitle'>here is another example of a portfolio</span>
                    </div>
                </div>       


                <div className='portfolio__content boutique '>
                    <div className='portfolio__img'>
                        <img alt='' src={Boutique}/>
                    </div>
                    <div className='portfolio__data'>
                        <h2 className='project_title'>Boutique exmaple</h2>
                        <span className='project__subtitle'>If You need an online store for your boutique <br /> you found the right place</span>
                    </div>
                </div>


                <div className='portfolio__content'>
                    <div className='portfolio__img'>
                        <img alt='' src={Propertee}/>
                    </div>
                    <div className='portfolio__data'>
                        <h2 className='project_title'>Propertee location</h2>
                        <span className='project__subtitle'>Give me your idea and i will turn it into reality</span>
                    </div>
                </div>         
            </div>
        </section>
    )
}

export default Portfolio