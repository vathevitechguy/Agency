import React, { useState } from 'react';
import BorderedBtn from '../../UI/Buttons/Bordered/BorderedBtn';
import BrandLogo from '../Brand/Brand';
import './Navbar.scss';
import NavbarMenu from '../NavMenu/NavbarMenu';
import ToggledNavbar from '../ToggledNavbar/ToggledNavbar';
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
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Blog</a>
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
