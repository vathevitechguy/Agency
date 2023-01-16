import React from 'react';
import { NavLink } from 'react-router-dom';
import BorderedBtn from '../../UI/Buttons/Bordered/BorderedBtn';
import './ToggledNavbar.scss';

const ToggledNavbar = (props) => {
  return (
    <React.Fragment>
      <div class="nav-container">
        <span className="CloseBtn" onClick={props.onClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </span>
        <ul class="nav-tabs">
          <li class="nav-tab">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="about-us"
            >
              About
            </NavLink>
          </li>
          <li class="nav-tab">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="services"
            >
              Services
            </NavLink>
          </li>
          <li class="nav-tab">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="pricing"
            >
              Pricing
            </NavLink>
          </li>
          <li class="nav-tab">
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="blog"
            >
              Blog
            </NavLink>
          </li>
          <li class="nav-tab">
            <BorderedBtn customStyle="contactBtn-custom" type="button">
              Contact
            </BorderedBtn>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
export default ToggledNavbar;
