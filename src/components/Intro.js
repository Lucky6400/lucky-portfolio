import React from 'react'
import './intro.css'
import diego from '../img/introPhoto.png'
import resume from '../other/resume.pdf'

const Intro = () => {
  return (


    <div className="" id="intro">
      <div className="row m-auto justify-content-between">
        <div className="col-lg-5 intro-left  mt-5">
          <div className="blob">

          </div>
          <p className="fs-large">Hello, my name is</p>
          <h1 className="fs-name">Lucky Jain</h1>
          <div className="work">
            <div className="work-w">
              <div className="fw-bold text-primary">React</div>
              <div className="fw-bold text-primary">Node</div>
              <div className="fw-bold text-primary">JavaScript</div>
              <div className="fw-bold text-primary">SaSS</div>
              <div className="fw-bold text-primary">Bootstrap</div>
              <div className="fw-bold text-primary">Firebase</div>
              <div className="fw-bold text-primary">Tailwind CSS</div>
            </div>
          </div>
          <p className="mt-3">
            A passionate Web developer specialising in full-stack web development using MERN Stack. I have worked on several high quality projects and created reusable components for further use. I am a forever learner, and always interested to know and work with latest technologies.
          </p>
          <a href={resume} download="lucky_jain_web_dev_resume">
            <button className="btn-download">Download Resume</button>
          </a>
          <a href="#contact">
            <button className="btn-download">Hire Me</button>
          </a>
          <a href="#about">
            <button className="btn-download">Know More</button>
          </a>
          <a href="#projects">
            <button className="btn-download">View Projects</button>
          </a>
        </div>
        <div className="col-lg-6 ps-2 pt-2 right-int pt-lg-4 pt-3">
          <div className=" img-container-intro col-lg-7 mt-lg-5 mt-3">
            <img src={diego} alt="" className="img-me" />
            <div className="rotator-motion bg-theme"></div>
          </div>
        </div>
      </div>
      <a href="#intro">
        <button title="Scroll to top" className="btn-scrl"> &#8593; </button>
      </a>
    </div>



  )
}

export default Intro

