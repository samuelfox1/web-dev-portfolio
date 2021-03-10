import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'
import Nav from "./components/Nav/index"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

import Fade from 'react-reveal/Fade'



const App = () => {
  return (
    <>
      <Nav />

      <Fade>
        <Home />
      </Fade>

      <Fade>
        <Projects />
      </Fade>

      <Zoom>
        <Contact />
      </Zoom>
    </>
  )
}

export default App;