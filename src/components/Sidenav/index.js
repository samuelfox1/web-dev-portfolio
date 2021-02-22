import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";

export default function Sidenav() {

    return (

        <ul id="slide-out"
            className="sidenav">
            <li>
                <a href="/"
                    className="sidenav-close">
                    <i className="material-icons">clear</i>
                </a>
            </li>
            <li className="divider" />

            <li>
                <a href="/"
                    className="waves-effect">
                    Home
                    {/* <i className="material-icons">cloud</i> */}
                </a>
            </li>
            <li className="divider" />

            <li>
                <a href="/projects"
                    className=" waves-effect">
                    Projects
                        </a>
            </li>
            <li className="divider" />

            <li>
                <a href="/contact"
                    className="waves-effect">
                    Contact
                        </a>
            </li>
            <li className="divider" />
        </ul>
    )
}