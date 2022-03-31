import React from 'react'
import './intro.css'
import diego from '../img/introPhoto.png'

const Intro = () => {
  return (


    <div className=" container-fluid">
      <div className="row m-auto justify-content-between">
        <div className="col-lg-5  mt-5">
          <p className="fs-large">Hello, my name is</p>
          <h1 className="fs-name">Lucky Jain</h1>
          <div className="work">
            <div className="work-w">
              <div className="fw-bold text-primary">React</div>
              <div className="fw-bold text-primary">Node</div>
              <div className="fw-bold text-primary">Express</div>
              <div className="fw-bold text-primary">TypeScript</div>
              <div className="fw-bold text-primary">Docker</div>
              <div className="fw-bold text-primary">JavaScript</div>
            </div>
          </div>
          <p className="mt-3">
            A passionate Web developer specialising in full-stack web development using MERN Stack. I have worked on several high quality projects and created reusable components for further use. I am a forever learner, and always interested to know and work with latest technologies.
          </p>
          <button className="btn-download">Download Resume</button><button className="btn-download">Hire Me</button>
          <button className="btn-download">Know More</button><button className="btn-download">View Projects</button>

        </div>
        <div className="col-lg-6 ps-2 pt-2  bg-gradient right-int">
          <div className="ms-5 ps-5">
            <img src={diego} alt="" className="img-me" />
          </div>
        </div>
      </div>
    </div>



  )
}

export default Intro

