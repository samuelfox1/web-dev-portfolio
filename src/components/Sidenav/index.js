import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "materialize-css/dist/css/materialize.min.css";

export default function Sidenav({ handleUpdateTitle }) {

    return (

        <ul id="slide-out"
            className="sidenav">
            <li>
                <a
                    className="sidenav-close">
                    <i className="material-icons">clear</i>
                </a>
            </li>
            <li className="divider" />

            <li>
                <Link to="/"
                    onClick={() => handleUpdateTitle('Samuel Fox')}
                    className="waves-effect sidenav-close" >
                    Home
                    {/* <i className="material-icons">cloud</i> */}
                </Link>
            </li>
            <li className="divider" />

            <li>
                <Link to="/projects"
                    onClick={() => handleUpdateTitle('Projects')}
                    className=" waves-effect sidenav-close">
                    Projects
                        </Link>
            </li>
            <li className="divider" />

            <li>
                <Link to="/contact"
                    onClick={() => handleUpdateTitle('Contact')}
                    className="waves-effect sidenav-close">
                    Contact
                        </Link>
            </li>
            <li className="divider" />
        </ul>
    )
}