import React, { useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from "./components/Nav/index"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Footer from "./components/Footer"


import Aos from "aos"
import "aos/dist/aos.css"



const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1500,
      offset: 250
    })
  }, [])


  return (
    <>

      <Nav />

      <Home />

      <Projects />

      {/* <Contact /> */}

      <Footer />

    </>
  )
}

export default App;