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


// ::: darktheme ::: //
import { lightTheme, darkTheme, GlobalStyles } from "./components/darkmode/light.js";
import styled, { ThemeProvider } from "styled-components";
import {FaRegMoon} from 'react-icons/fa'
import { useState } from 'react';


const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;


function App() {
  
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
        <span className='darkmode' onClick={() => themeToggler()}> <FaRegMoon /> </span>
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
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
