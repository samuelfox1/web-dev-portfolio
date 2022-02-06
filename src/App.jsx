import React, { useEffect, useState } from 'react'
import { Preloader } from 'react-materialize'
import Nav from "./components/Nav/index"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"
import './App.css'


export default function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => Aos.init({ duration: 1500, offset: 200 }), [])

  const aos = {
    hello: 'flip-up',
    project: 'flip-up',
    projectCard1: 'fade',
    projectCard2: 'fade',
    footer: 'flip-up',
    footerContainer: 'fade'
  }

  window.onload = () => {
    setLoaded(true)
  }

  return (
    <>
      <Nav />
      {
        loaded
          ? <Home aos={aos} />
          : <div className="preloader"><Preloader /></div>
      }
      <Footer aos={aos} />
    </>
  )
}