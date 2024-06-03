import React from 'react';
import './Header.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mb-4 top-bar navbar-static-top sps sps--abv">
      <div className="container">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
          data-target="#navbarCollapse1" aria-controls="navbarCollapse" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand mx-auto d-none d-lg-block" href="#"><span><img src="img/nav-brand.png" style={{ height: '60px', filter: 'brightness(80%)' }} alt="" /></span></a>
        <a className="navbar-brand mx-auto" href="#"><span><img src="img/navbar-brand-ver.png" style={{ height: '40px', filter: 'brightness(50%)' }} alt="" /></span></a>

        <div className="collapse navbar-collapse" id="navbarCollapse1">
          <ul className="navbar-nav ml-auto" id="nav-list">
            <li className="nav-item active"> <a className="nav-link" href="#myCarousel">Home <span
              className="sr-only">(current)</span></a> </li>
            <li className="nav-item"> <a className="nav-link" href="#services">Services</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#about">About</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#team">Team</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#projects">Projects</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#gallery">Image Gallery</a> </li>
            <li className="nav-item"> <a className="nav-link" href="#contact">Contact</a> </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
