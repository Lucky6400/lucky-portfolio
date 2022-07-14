import React from 'react'

const Productlist = ({ name, description, date, img, link }) => {
  return (

    <div className="col-lg-3 mx-3 pt-3 rounded-3 my-3 bg-theme">
      <div className="heading_cont">
        <div className="img-box">
          <img src={img} alt="" className="w-100" />
          <div className="prod_name">
           <a className="nav-link text-black" href={link} >{name}</a> 
          </div>
        </div>
      </div>
      <div className="w-100 my-4 text-white">
        {description}
      </div>
    </div>

  )
}

export default Productlist
