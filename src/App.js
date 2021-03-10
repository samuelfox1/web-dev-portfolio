import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom'
import Nav from "./components/Nav/index"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Home from "./pages/Home"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
          {/* <Zoom> */}
          <Route exact path="/" component={Home} />
          {/* </Zoom> */}
          <Zoom>
            <Route path="/projects" component={Projects} />
          </Zoom>
          <Zoom>
            <Route path="/contact" component={Contact} />
          </Zoom>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;