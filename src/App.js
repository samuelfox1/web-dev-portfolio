import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
// import Zoom from 'react-reveal/Zoom'
import Nav from "./components/Nav/index"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Home from "./pages/Home"

// import Fade from 'react-reveal/Fade'

import Aos from "aos"
import "aos/dist/aos.css"



const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000,
      // offset: 250
    })
  }, [])


  return (
    <>

      <Nav />

      <Home />

      {/* <Projects /> */}

      {/* <Contact /> */}

    </>
  )
}

export default App;