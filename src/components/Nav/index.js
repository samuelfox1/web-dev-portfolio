import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize"

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

export default function Nav() {
    const options = {
        draggable: true,
        edge: 'right',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
    }
    const brand = <a href="/#root" className="brand-logo">Samuel Fox</a>
    const menuIcon = <Icon >menue</Icon>

    return (

        <Navbar
            fixed
            brand={brand}
            id="mobile-nav"
            options={options}
            alignLinks="right"
            menuIcon={menuIcon}
        >
            <NavItem href="/#projects" className="sidenav-close">Projects</NavItem>
            <NavItem href="/#contact" className="sidenav-close">Contact</NavItem>
        </Navbar>
    )
}