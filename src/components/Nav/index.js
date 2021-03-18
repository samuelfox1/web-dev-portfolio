import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize"

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

export default function Nav() {


    return (

        <Navbar
            alignLinks="right"
            brand={<a href="/" className="brand-logo">Samuel Fox</a>}
            fixed
            id="mobile-nav"
            menuIcon={<Icon >menue</Icon>}
            options={{
                draggable: true,
                edge: 'right',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <NavItem href="/#projects" className="sidenav-close">Projects</NavItem>
            <NavItem href="/#contact" className="sidenav-close">Contact</NavItem>

        </Navbar>

    )
}