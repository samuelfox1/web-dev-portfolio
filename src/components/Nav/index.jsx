import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { FaAddressCard, FaCode, FaGlasses } from 'react-icons/fa';
import { Icon, NavItem, Navbar } from 'react-materialize';

import { useAppContext } from '../../context/AppProvider';
import BlurBox from '../BlurBox';
import './style.css';

export default function Nav() {
  const {
    about: { firstName, lastName },
  } = useAppContext();

  const options = {
    draggable: true,
    edge: 'right',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true,
  };
  const brand = <a href="/#root">{`${firstName} ${lastName}`}</a>;
  const menuIcon = <Icon>menue</Icon>;

  return (
    <header>
      <BlurBox />
      <Navbar
        // fixed
        brand={brand}
        id="mobile-nav"
        options={options}
        alignLinks="right"
        menuIcon={menuIcon}
      >
        <NavItem href="/#current-work" className="sidenav-close">
          Current Work
          <FaGlasses />
        </NavItem>
        <NavItem href="/#previous-work" className="sidenav-close">
          Previous Work
          <FaCode />
        </NavItem>
        <NavItem href="/#contact" className="sidenav-close">
          Contact
          <FaAddressCard />
        </NavItem>
      </Navbar>
    </header>
  );
}
