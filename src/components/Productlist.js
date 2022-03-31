import React from 'react'

const Productlist = ({name, desc, date}) => {
  return (
    
       <div className="col-lg-3 mx-3 pt-3 rounded-3 my-3 bg-primary bg-gradient" style={{ height: "200px" }}>
           <div className="text-center">
           <h4>{name}</h4> <br />
           <p className="text-light">{desc}</p>
            <b>{date}</b>
           </div>
        </div>
    
  )
}

export default Productlist
