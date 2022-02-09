import React, { useEffect, useState } from 'react'
import { Preloader } from 'react-materialize'
import Nav from "./components/Nav/index"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Aos from "aos"
import "aos/dist/aos.css"

export default function App() {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => Aos.init({ duration: 1500, offset: 200 }), [])


  window.onload = () => setLoaded(true)

  const getComponent = () => (
    loaded
      ? <Home />
      : (
        <div className="preloader">
          <Preloader />
        </div>
      )
  )

  return (
    <>
      <Nav />
      {getComponent()}
      <Footer />
    </>
  )
}