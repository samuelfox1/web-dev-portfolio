import React from "react";
import { Heading, Icon, Navbar } from "react-bulma-components";


export default function Nav() {

    const hoverable = true
    const itemAactive = true
    const arrowless = true

    const up = "true"
    const right = false
    const boxed = true

    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }

    });

    return (
        <Navbar >
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="#">
                    {/* <img
                        src="https://bulma.io/images/bulma-logo.png"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width="112"
                        height="28"
                    /> */}
                    <Heading textColor="primary">Samuel Fox</Heading>
                </Navbar.Item>
                <Navbar.Burger data-target='navMenu' />
            </Navbar.Brand>
            <Navbar.Menu id="navMenu">
                <Navbar.Container>
                    <Navbar.Item hoverable={hoverable} active={itemAactive} href="#">
                        <Navbar.Link arrowless={arrowless}>First</Navbar.Link>
                        <Navbar.Dropdown up={up} right={right} boxed={boxed}>
                            <Navbar.Item href="#">Subitem 1</Navbar.Item>
                            <Navbar.Item href="#">Subitem 2</Navbar.Item>
                            <Navbar.Divider />
                            <Navbar.Item href="#">After divider</Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>
                    <Navbar.Item href="#">Second</Navbar.Item>
                </Navbar.Container>
                <Navbar.Container align="end">
                    <Navbar.Item href="#">At the end</Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    )
}