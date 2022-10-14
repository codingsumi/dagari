import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <section className="hero-wrap mt-5 bg-light">
          {/* <div className="overlay" /> */}
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-center"
              style={{ height: 300 }}
            >
              <div className="col-md-9 text-center">
                <h1 className="mb-3 bread">Contact Us</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html">Home</a>
                  </span>{" "}
                  <span>Contact</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="ftco-section contact-section">
          <div className="container">
            <div className="text-center mb-5">
            <h1 className="bread text-primary">Connect With Us</h1>
            <p className="text-primary">We are friendly & feel free to contact . Reach out to us anything and we'll happily answer your questions</p>
            </div>
            <div className="row block-9">
              <div className="col-md-4 contact-info border p-4">
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <h2 className="h4">Contact Information</h2>
                  </div>
                  <div className="col-md-12 mb-3 text-dark">
                    <p>
                      <span>Address:</span> Gautamnagar, Bhaganbigha, Vill.
                      Shahpur, Block- Rahui, Nalanda - 803118
                    </p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p>
                      <span>Phone:</span>{" "}
                      <a href="#!">+91 9341508288 / 9262994115</a>
                    </p>
                  </div>
                  <div className="col-md-12 mb-3">
                    <p>
                      <span>Email:</span>{" "}
                      <a href="mailto:gautamayurvedicinstitute@gmail.com">
                        gautamayurvedicinstitute@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-1" />
              <div className="col-md-6 ">
                <form action="#!" className="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name
                      id
                      cols={30}
                      rows={7}
                      className="form-control"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="btn btn-primary py-3 px-5"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
