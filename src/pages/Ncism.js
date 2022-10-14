import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Ncism = () => {
  return (
    <>
      <div>
        <section className="hero-wrap mt-5 bg-light">
          <div className="overlay" />
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-center"
              style={{ height: 300 }}
            >
              <div className="col-md-9 text-center">
                <h1 className="mb-3 bread">NCISM NCR</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html">HOME</a>
                  </span>{" "}
                  <span>NCISM NCR</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
              <div className="quick bg-light p-3">
                 <h2 className="mb-3">Quick Links</h2>
                  <ul class="do-list">
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span> Details of Director or Dean or Principal and Medical Superintendent
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}
                        Details of teaching staff.
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}
                        Details of non-teaching staff of college.
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}
                        Details of Hospital Staff.
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}
                        Details of the sanctioned intake BAMS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}
                        List of students admitted, merit-wise, category-wise for the current and previous year.
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}
                        Research publications during the last one year
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Details of any Continuous Medical Education (CME) programmes, conferences and/or any academic activities conducted
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Details of any awards and achievement received by the students or faculty
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Details of the affiliated University and its Vice-Chancellor and Registrars
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Result of all the examinations of last one year
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Detailed status of recognition of all the courses
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Month-wise analysis of attendance of teaching, non-teaching college staff, hospital staff, students and Patients in Out-Patient Department and In-Patient Department
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Anti Ragging
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Courses
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        Clinical Materials in the Hospital
                      </NavLink>
                      </li>
                    <li>
                      <NavLink to="/">
                        <span class="ion-ios-arrow-dropright-circle mr-2"></span>{" "}                    
                        College Council
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ncism;
