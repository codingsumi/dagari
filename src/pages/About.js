// import { useState, useEffect } from "react";
// import Loader from '../components/Loader';


const About = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
   {/* { loading ? <Loader /> : ( */}
    <div>
        <section className="hero-wrap mt-5 bg-light">
          <div className="overlay" />
          <div className="container">
            <div
              className="row no-gutters slider-text align-items-center justify-content-center"
              style={{ height: 300 }}
            >
              <div className="col-md-9 text-center">
                <h1 className="mb-3 bread">About Us</h1>
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="index.html">ABOUT</a>
                  </span>{" "}
                  <span>About Us</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        </div>
   {/* )} */}
    </>
  )
}

export default About