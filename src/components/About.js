import React from 'react'
import './about.css'
import costa from '../img/introPhoto3.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  return (
    <div className="mt-4 row justify-content-center" id="about">
      <div className="col-lg-5 about-left mx-3">
        {/* <img src={costa} alt="" className="col-lg-6 mt-5 img-s"/> */}
        <div className="card shadow-lg">
          <div className="card-blob-1">
          </div>
          <div className="card-blob-2">
          </div>
          <div className="card-blob-3"></div>
          <div className="card-blob-4"></div>
          <div className="text-center w-100">
            <h3 className="text-white fw-bolder">Lucky Jain</h3>
            <hr />
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <h1 className="fw-bolder text-white">83</h1>
              <hr />
              <h3 className="fw-bolder text-white">IND</h3>
            </div>
            <div className="col-7">
              <div className="w-100 d-flex justify-content-center">
                <div>
                  <img src={costa} alt="" className="img-about w-100" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-100">
            <h4 className="text-center m-0 w-100 text-white">
              Web Developer
            </h4>
          </div>
          
          <hr />
          <div className="w-100">
            <div className="row justify-content-between">
              <div className="col-6">
                <div className="w-100 d-flex justify-content-between">
                  <div className="col-8">
                    <h4 className='text-white fw-bolder'>HTML</h4>
                    <h4 className='text-white fw-bolder'>CSS</h4>
                    <h4 className='text-white fw-bolder'>JS</h4>
                  </div>
                  <div className="col-4">
                  <h4 className='text-white fw-bolder'>:95</h4>
                  <h4 className='text-white fw-bolder'>:89</h4>
                  <h4 className='text-white fw-bolder'>:82</h4>
                  </div>
                </div>
              </div>
              <div className="col-6">
              <div className="w-100 d-flex justify-content-between">
                  <div className="col-8">
                    <h4 className='text-white fw-bolder'>React</h4>
                    <h4 className='text-white fw-bolder'>Node</h4>
                    <h4 className='text-white fw-bolder'>DBs</h4>
                  </div>
                  <div className="col-4">
                  <h4 className='text-white fw-bolder'>:81</h4>
                  <h4 className='text-white fw-bolder'>:71</h4>
                  <h4 className='text-white fw-bolder'>:60</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-5 pt-5 mt-5">
        <h2 className="mt-5 mb-3" style={{ fontWeight: "800" }}>About Me</h2>
        <b>A brief intro to my background</b> <br /> <br />
        <p>
          Hi there, I am Lucky Jain, a full stack web developer in JavaScript. I come from a small town of Central Province of India. I am a Computer Science graduate from Barkatullah University, Bhopal. I have been learning and doing Web Development soon after my graduation. I work as a Software Development Engineer and provide effective solutions using my skills. I was always enthusiastic about programming and I am a forever learner who believes in upgrading constantly.
        </p>
        <div className="text-center">
          <a href="https://github.com/Lucky6400"><GitHubIcon style={{ fontSize: "4rem", margin: "5px", color: "rgb(129, 0, 242)" }} /></a>
          <a href="https://www.linkedin.com/in/lucky6400/"><LinkedInIcon style={{ fontSize: "4rem", margin: "5px", color: "rgb(129, 0, 242)" }} /></a>
          <a href="https://www.instagram.com/lucky.jain_/"><InstagramIcon style={{ fontSize: "4rem", margin: "5px", color: "rgb(129, 0, 242)" }} /></a>

        </div>
      </div>

    </div>
  )
}

export default About
