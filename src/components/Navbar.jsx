import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingUser, faBell as regularBell, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar flex text-white text-xl font-semibold justify-between items-center px-12 py-8 backdrop-blur-3xl z-10 relative">
      <div className="logo-container ">
        <Link to="/" className='cursor-pointer'>
          <div className="navbar-title">Smart City</div>
        </Link>
      </div>
      <div className="navbar-icons flex justify-between items-center text-lg">
        <Link to="/services" className='mx-6 cursor-pointer'>
          <p>Services</p>
        </Link>
        <Link to="/updates" className='mx-6 cursor-pointer'>
          <p>Local News</p>
        </Link>
        <Link to="/alerts" className='mx-6 cursor-pointer'>
          <p>Emergency Alerts</p>
        </Link>
        <Link to="/report" className="mx-6 cursor-pointer">
          Report an issue
        </Link>
        <Link to="/feedback" className="mx-6 cursor-pointer">
          feedback
        </Link>
        <Link to="/map" className="mx-6 cursor-pointer">
          Interactive Map
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
