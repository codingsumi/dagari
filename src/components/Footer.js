import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="ftco-footer ftco-section img">
        <div className="overlay" />
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-3 col-md-4 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h1 className="logo">
                  <img
                    src="./images/footer-logo.svg"
                    alt="logo"
                    className="img-fluid w-25"
                  />{" "}
                  DAGARI
                </h1>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-lg-3 col-md-3 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2 className="location">Quick Links</h2>
              </div>
              <ul class="do-list">
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span> About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Chairman's Message
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Principle's Message
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span> Teaching
                    Staff
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span> Mission
                    & Vision
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Approvals
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Attendance Report
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2 className="location">Important Links</h2>
              </div>
              <ul class="do-list">
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>Admission Criteria
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span> Downloads
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Alumni Association
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Career / Placements
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span> Teaching
                    Fee Payment
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span> Anti - Ragging
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Facilities
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Admission Form 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <span class="ion-ios-checkmark-circle mr-2"></span>{" "}
                    Privacy & Policy
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4 mb-5 mb-md-5">
              <div className="ftco-footer-widget mb-4">
                <h2 className="location">Contact Us</h2>
              </div>
              <ul class="do-list">
                <li>
                  <NavLink to="/">
                  <span class="ion-ios-navigate mr-2"></span>{" "}Gautamnagar, Bhaganbigha, Vill. Shahpur, Block- Rahui, Nalanda - 803118
                  </NavLink>
                </li>
                <li>
                  <NavLink to="mailto:gautamayurvedicinstitute@gmail.com">
                  <span class="ion-ios-mail-open mr-2"></span>{" "}gautamayurvedicinstitute@gmail.com
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                  <span class="ion-ios-call mr-2"></span>{" "}+91 9341508288 / 9262994115
                  </NavLink>
                </li>
              </ul>
              <div className="ftco-footer-widget mb-4 mt-4">
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                  <li>
                    <a href="#!">
                      <span className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <span className="icon-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                Copyright © All rights reserved |
                <NavLink to="https://gautamtech.com/" target="_blank">
                  {" "}
                  Gautam Tech Solutions
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
