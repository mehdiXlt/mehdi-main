import './App.css';
import Header from './components/home/header'
import Home from './components/home/home'
import About from './components/home/about'
import Skills from './components/home/skill'
import Qualification from './components/home/qualification';
import Services from './components/home/services';
import Project from './components/home/new';
import Contact from './components/home/contact';
import Footer from './components/home/footer'
import Button  from './components/home/button';
import Portfolio from './components/home/potfolio';


function App() {
  
  

  return (
    <div className="App">

        <Header/>
        <Home className='panel'/>
        <About className='panel'/> 
        <Skills className='panel'/>
        <Qualification className='panel'/>
        <Portfolio className='panel'/>
        <Services className='panel'/>  
        <Project className='panel'/>
        <Contact />
        <Footer />
        <Button />

    </div>
  );
}

export default App;
