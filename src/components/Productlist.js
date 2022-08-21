import React from 'react'

const Productlist = ({ name, description, img, link }) => {
  return (

    <div className="col-lg-3 productCard mx-3 p-0 rounded-0 shadow-lg my-3 position-relative overflow-hidden bg-theme">
      <div className="heading_cont">
        <div className="img-box">
          <img src={img} alt="" className="w-100" />
          
        </div>
      </div>
      <div className="w-100 p-3 text-center productDesc h-100 position-absolute left-0 bg-theme text-white">
        {description.split(" ").slice(0, 35).join(" ")}...
        <br />
        <a className="nav-link text-warning fw-bold" href={link} >{name}&#10138;</a>
      </div>
    </div>

  )
}

export default Productlist
