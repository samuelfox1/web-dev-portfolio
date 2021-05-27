import React, { useEffect } from 'react'
import Nav from "./components/Nav/index"
import Projects from "./pages/Projects"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"


export default function App() {

  useEffect(() => Aos.init({ duration: 1500, offset: 200 }), [])

  const aos = {
    hello: 'flip-up',
    project: 'flip-up',
    projectCard1: 'fade',
    projectCard2: 'fade',
    footer: 'flip-up',
    footerContainer: 'fade'
  }

  return (
    <>
      <Nav />
      <Home aos={aos} />
      <Projects aos={aos} />
      <Footer aos={aos} />
    </>
  )
}