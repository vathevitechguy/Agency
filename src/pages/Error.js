import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';
import SiteFooter from '../components/SiteFooter';

const Error = () => {
  return (
    <Fragment>
      <Navbar title="agency" />
      <div className="notfound">
        <h3>Error 404. Page Not Found!</h3>
        <p>
          Click <Link to="/">Here</Link> to go to Home Page
        </p>
      </div>
      <SiteFooter />
    </Fragment>
  );
};

export default Error;
