import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Intro = () => {
  return (
    <>
      <section
        className="ftco-section"
        style={{ backgroundImage: "url(images/intro.jpg)" }}
      >
        <div className="container">
            <h1 className="text-center display-5">WELCOME TO DR. AVIJEET GAUTAM AYURVEDIC RESEARCH INSTITUTE</h1>
          <div className="row">
            <div className="col-md-4 shadow-sm p-3 bg-white">
                <LazyLoadImage src="./images/logo.svg" className="img-fluid w-100" alt="Dr. Avijeet kumar" />
                <h2 className="text-center font-weight-bold text-primary mt-3">DAGARI</h2>
            </div>
            <div className="col-md-8">
                <p className="text-justify text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <p className="text-justify text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                <a href="#!" className="btn btn-primary py-3 px-5">Explore</a>
            </div>
          </div>
        </div>
      </section>

      <section>
        
      </section>
    </>
  );
};

export default Intro;
