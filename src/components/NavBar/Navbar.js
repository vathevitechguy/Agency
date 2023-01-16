import React, { useState } from 'react';
import BorderedBtn from '../../UI/Buttons/Bordered/BorderedBtn';
import BrandLogo from '../Brand/Brand';
import './Navbar.scss';
import NavbarMenu from '../NavMenu/NavbarMenu';
import ToggledNavbar from '../ToggledNavbar/ToggledNavbar';
import { NavLink } from 'react-router-dom';
const Navbar = (props) => {
  const [toggleNavMenu, setToggleNavMenu] = useState(false);
  const openNavMenuHandler = (e) => {
    e.preventDefault();
    setToggleNavMenu(true);
  };
  const closeNavMenuHandler = () => {
    setToggleNavMenu(false);
  };
  return (
    <React.Fragment>
      <nav className="Navbar">
        <div className="Navbar__wrapper">
          <div className="Navbar__logo">
            <BrandLogo title={props.title} />
          </div>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'Navbar__active' : '')}
                to="about-us"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'Navbar__active' : '')}
                to="services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'Navbar__active' : '')}
                to="pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'Navbar__active' : '')}
                to="blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>

          {toggleNavMenu && <ToggledNavbar onClick={closeNavMenuHandler} />}
          <div className="Navbar__btn">
            <BorderedBtn type="button">Contact</BorderedBtn>
          </div>
        </div>
        <NavbarMenu onClick={openNavMenuHandler} />
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
