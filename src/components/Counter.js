import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <>
    <section className="ftco-counter ftco-bg-dark img" id="section-counter" style={{backgroundImage: 'url(images/bg_3.jpg)'}} data-stellar-background-ratio="0.5">
  <div className="overlay" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
            <div className="block-18 text-center">
              <div className="text">
                <strong className="counter"><CountUp duration={2.75} delay={0} end={45990} /></strong>
                <span>Books</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
            <div className="block-18 text-center">
              <div className="text">
              <strong className="counter"><CountUp duration={2.75} delay={0} end={12000} /></strong>
                <span>Students</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
            <div className="block-18 text-center">
              <div className="text">
              <strong className="counter"><CountUp duration={2.75} delay={0} end={500} /></strong>
                <span>Teaching Staff</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap">
            <div className="block-18 text-center">
              <div className="text">
              <strong className="counter"><CountUp duration={2.75} delay={0} end={1200} /></strong>
                <span>Non - Teaching Staff</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Counter