import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div>
        <section className="hero-wrap mt-5">
          <div className="overlay" />
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-center"
              style={{ height: 700 }}
            >
              <div className="col-md-9 text-center">
                <h1 className="mb-3 bread" style={{ fontSize: '200px' }}>404</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <h4>PAGE NOT FOUND</h4>
                  </span>{" "}
                </p>
                <NavLink to="/" className="btn btn-primary py-3 px-5">Back TO HOME</NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageNotFound;
