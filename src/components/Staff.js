import React from "react";

const Staff = () => {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-12 heading-section text-center">
              <h3 className="subheading">Mentors</h3>
              <h2 className="mb-1">Meet Our Teaching Staff</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex">
              <div className="coach align-items-stretch">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/staff/team1.jpg)" }}
                />
                <div className="text bg-white p-4 ">
                  <span className="subheading">Designation</span>
                  <h3>
                    <a href="#!">Staff Name</a>
                  </h3>
                  <p />
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="coach align-items-stretch">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/staff/team2.jpg)" }}
                />
                <div className="text bg-white p-4 ">
                  <span className="subheading">Designation</span>
                  <h3>
                    <a href="#!">Staff Name</a>
                  </h3>
                  <p />
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="coach align-items-stretch">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/staff/team3.jpg)" }}
                />
                <div className="text bg-white p-4 ">
                  <span className="subheading">Designation</span>
                  <h3>
                    <a href="#!">Staff Name</a>
                  </h3>
                  <p />
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="coach align-items-stretch">
                <div
                  className="img"
                  style={{ backgroundImage: "url(images/staff/team4.jpg)" }}
                />
                <div className="text bg-white p-4 ">
                  <span className="subheading">Designation</span>
                  <h3>
                    <a href="#!">Staff Name</a>
                  </h3>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Staff;
