import React, { useState } from 'react';
import './NavS.css';
// import {BrowserRouter as Router,Router, Switch, Route, Link, Outlet} from 'react-router-dom';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom'


function Nav() {

  return (
    <>
      <nav className="nav">
        <h3>Cura</h3>
        <ul className='nav-links'>
            <li><Link className='li-link' to="/doctors">Doctors</Link></li>
            <li><Link className='li-link' to="/appointment">Take Appointment</Link></li>
            <li><Link className='li-link' to="/about">About</Link></li>
        </ul>
      </nav> 
    </>
  )
}

export default Nav