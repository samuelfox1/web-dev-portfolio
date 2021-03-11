import React, { useEffect, useState } from "react";
import { Navbar, NavItem, Icon } from "react-materialize"

import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";






export default function Nav() {
    const [title, setTitle] = useState({ title: 'Samuel Fox' })


    const handleUpdateTitle = (x) => {
        setTitle({ title: x })
    }



    return (


        <Navbar
            alignLinks="right"
            brand={<a className="brand-logo">Samuel Fox</a>}
            // centerLogo
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'right',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: false
            }}
        >
            <NavItem href="/#projects" className="sidenav-close">Projects</NavItem>
            <NavItem href="/#contact" className="sidenav-close">Contact</NavItem>

        </Navbar>
    )
}