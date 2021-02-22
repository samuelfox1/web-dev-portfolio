import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from "./components/Nav/index"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;