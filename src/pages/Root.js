import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar/Navbar';

const Root = () => {
  return (
    <>
      <Navbar title="Agency" />
      <Outlet />
    </>
  );
};

export default Root;
