import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light shadow-sm"
        id="ftco-navbar"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="./images/logo.svg"
              className="img-fluid mr-2"
              style={{ maxWidth: 40, minWidth: 40 }}
              alt="logo"
            />
            DAGARI
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="#!"
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  ABOUT
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/about/about-us">
                    About College
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/about/chairman-message"
                  >
                    Chairman’s Message
                  </NavLink>
                  <NavLink className="dropdown-item" to="/about/principal">
                    Principal
                  </NavLink>
                  <NavLink className="dropdown-item" to="/about/mission-vision">
                    Vision &amp; Mission
                  </NavLink>

                  <NavLink
                    className="dropdown-item"
                    to="/about/ncism-mandatory-disclosure"
                  >
                    NCISM Mandatory Disclosure
                  </NavLink>
                </div>
              </li>

              <li className="nav-item">
                <NavLink to="/ncism-mcr" className="nav-link">
                  NCISM MCR
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="#!"
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  STAFF
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/ncism/teaching-staff">
                    Teaching Staff
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/ncism/non-teaching-staff"
                  >
                    Non-teaching Staff
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/ncism/conferrence-activity"
                  >
                    Conference &amp; Activities
                  </NavLink>
                  <NavLink className="dropdown-item" to="/ncism/hospital-staff">
                    Hospital Staff
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/ncism/attendance-report"
                  >
                    Attendance Report
                  </NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="#!"
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  FACILITIES
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/facility/library">
                    Library
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/facility/laboratories"
                  >
                    Laboratories
                  </NavLink>
                  <NavLink className="dropdown-item" to="/facility/yoga-centre">
                    Yoga Centre
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/facility/herbal-garden"
                  >
                    Herbal Garden
                  </NavLink>
                  <NavLink className="dropdown-item" to="/facility/canteen">
                    Canteen
                  </NavLink>
                  <NavLink className="dropdown-item" to="/facility/transport">
                    Transport
                  </NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="#!"
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  DEPARTMENTS
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/department/laboratories">
                    Maulika Siddhant
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/laboratories">
                    Rachna Sharir
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/yoga-centre">
                    Kriya Sharir
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/herbal-garden">
                    Dravyaguna
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/canteen">
                    Rasashastra and Bhaishajya Kalpana
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Roga Nidan Evum Vikriti Vigyan
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Agadtantra Evum Vidhi Vaidyaka
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Swastha Vritta
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Kaumarbhritya
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Panchakarma
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Prasuti Tantra and Stri Roga
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Kayachikitsa
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Shalya Tantra
                  </NavLink>
                  <NavLink className="dropdown-item" to="/department/transport">
                    Shalakya Tantra
                  </NavLink>
                </div>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  to="#!"
                  className="nav-link dropdown-toggle"
                  id="navbardrop"
                  data-toggle="dropdown"
                >
                  MEDIA
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/media/events">
                    Events Gallery
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/media/video"
                  >
                    Video Gallery
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/media/press-release"
                  >
                  Press Release
                  </NavLink>
                  
                </div>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
