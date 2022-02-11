import React, { useContext } from "react";
import { Navbar, NavItem, Icon } from "react-materialize"
import { FaGlasses } from 'react-icons/fa'
// import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import { AppContext } from "../../context/AppProvider";
import './style.css'

export default function Nav() {
    const { about: { firstName, lastName } } = useContext(AppContext)

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
    const brand = <a href="/#root">{`${firstName} ${lastName}`}</a>
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
            <NavItem
                href="/#current-work"
                className="sidenav-close"
            >
                Current Work
                <FaGlasses />
            </NavItem>
            <NavItem
                href="/#previous-work"
                className="sidenav-close"
            >
                Previous Work
                <FaGlasses />
            </NavItem>
            <NavItem
                href="/#contact"
                className="sidenav-close"
            >
                Contact
                <FaGlasses />
            </NavItem>
        </Navbar>
    )
}