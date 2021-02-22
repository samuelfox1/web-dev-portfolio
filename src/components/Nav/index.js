import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Sidenav from "../Sidenav/index.js"

export default function Nav() {


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



    return (
        <div>
            <nav className="dark">
                <div className="nav-wrapper">
                    <a
                        className="brand-logo">
                        Samuel Fox
                        </a>
                    {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
                    <a href=""
                        data-target="slide-out"
                        className="sidenav-trigger right">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <Sidenav />
        </div>
    )
}