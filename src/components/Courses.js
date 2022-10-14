import React from 'react'

const Courses = () => {
  return (
    <>
<section className="ftco-section course-section">
  <div className="container">
    <div className="row justify-content-center mb-5 pb-3">
      <div className="col-md-7 heading-section text-center">
        <h2 className="mb-1">Our Courses</h2>
      </div>
    </div>
    <div className="row d-flex">
      <div className="col-md-4 d-flex">
        <div className="blog-entry justify-content-end">
          <a href="blog-single.html" className="block-20" >
            <img src="images/courses/course1.jpg" alt="courses" />
          </a>
          <div className="text p-3 float-right d-block">
            <h3 className="heading">
              <a href="#!" className="h4">Course A</a>
            </h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex">
        <div className="blog-entry justify-content-end">
        <a href="blog-single.html" className="block-20" >
            <img src="images/courses/course2.jpg" alt="courses" />
          </a>
          <div className="text p-3 float-right d-block">
            <h3 className="heading">
              <a href="#!" className="h4">Course C</a>
            </h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 d-flex">
        <div className="blog-entry">
        <a href="blog-single.html" className="block-20" >
            <img src="images/courses/course3.jpg" alt="courses" />
          </a>
          <div className="text p-3 float-right d-block">
            <h3 className="heading">
              <a href="#!" className="h4">Course B</a>
            </h3>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Courses