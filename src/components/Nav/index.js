import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Sidenav from "../Sidenav/index.js"

export default function Nav() {
    const [title, setTitle] = useState({ title: 'Samuel Fox' })

    // modified example from https://github.com/AndyBraveMX/react-learning/tree/master/react-sidenav-materializecss
    useEffect(() => {
        handleSideNAv()
    }, [])


    const handleSideNAv = () => {
        var sideNav = document.querySelector(".sidenav");

        M.Sidenav.init(sideNav, {
            // side that nav will slide out from 
            edge: "right",
            // speed of slide effec
            inDuration: 300
        });
    }

    const handleUpdateTitle = (x) => {
        setTitle({ title: x })
    }



    return (
        <div>
            <nav className="bg-color-dark">
                <div className="nav-wrapper">
                    <a
                        className="brand-logo center">
                        {title.title}
                    </a>
                    {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                    <a href=""
                        data-target="slide-out"
                        className="sidenav-trigger right">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        {/* <li><Link to="/" onClick={() => handleUpdateTitle('Samuel Fox')}>Home</Link></li>
                        <li><Link to="/projects" onClick={() => handleUpdateTitle('Projects')}>Projects</Link></li>
                        <li><Link to="/contact" onClick={() => handleUpdateTitle('Contact')}>Contact</Link></li> */}
                    </ul>
                </div>
            </nav>
            {/* <Sidenav handleUpdateTitle={handleUpdateTitle} /> */}
        </div>
    )
}