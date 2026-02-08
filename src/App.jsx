import React from 'react'
import styled from "styled-components"
import { darkTheme } from "./utils/Themes"
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Hero from './components/sections/Hero'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import StarCanvas from "./components/canvas/Stars.jsx"
import Projects from './components/sections/Projects.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/sections/Footer.jsx'
import Certificates from './components/sections/Certificates.jsx'


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary}; 
  width: 100%;
  min-height: 100vh; 
  overflow-x: hidden;
  position: relative;
  z-index: 1;
`;

const Wrapper = styled.div`
padding-bottom: 100px;
background: linear-gradient(
    38.73deg,
    rgba(204, 0, 187, 0.15) 0%,
    rgba(201, 32, 184, 0) 50%
  ),
  linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%,
    rgba(0, 70, 209, 0.15) 100%
  );
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const StarCanvasWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none; /* so you can still click through it */
`;


const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <StarCanvasWrapper>
            <StarCanvas />
          </StarCanvasWrapper>
          <div>
            <Hero />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects/>
            <Wrapper>
              <Certificates/>
              <Education />
              <Contact/>
            </Wrapper>
            <Footer/>
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App