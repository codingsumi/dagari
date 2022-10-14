import React from 'react'

const TopBar = () => {
  return (
    <>
    <div className="topbar shadow">
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="info">
          <a href="#!" className="mr-2"><span className="icon-map-marker text-dark" /> Patna</a>
          <a href="#!" className="mr-2"><span className="icon-envelope text-dark" /> info@dagari.com</a>
        </div>
      </div>
      <div className="col-md-6 text-right">
        <div className="social-icon">
          <a href="#!" className="mr-2"><span className="socialIcon icon-twitter text-white rounded-circle p-2 bg-primary" /></a>
          <a href="#!" className="mr-2"><span className="socialIcon icon-facebook text-white rounded-circle p-2 bg-primary" /></a>
          <a href="#!" className="mr-2"><span className="socialIcon icon-instagram text-white rounded-circle p-2 bg-primary" /></a>
          <a href="#!" className="mr-2"><span className="socialIcon icon-youtube text-white rounded-circle p-2 bg-primary" /></a>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default TopBar