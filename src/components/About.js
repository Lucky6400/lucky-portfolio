import React from 'react'
import './about.css'
import costa from '../img/Lucky Jain.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
  return (
    <div className="mt-4 row justify-content-center" id="about">
        <div className="col-lg-5 mx-3">
            <img src={costa} alt="" className="col-lg-6 mt-5 img-s"/>
        </div>
        <div className="col-lg-5 pt-5 mt-5">
            <h2 className="mt-5 mb-3" style={{fontWeight: "800"}}>About Me</h2>
            <b>The main motive of writing about section is here</b> <br /> <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum cupiditate porro blanditiis asperiores ipsum! Itaque aliquid quibusdam pariatur facilis inventore officiis neque corrupti dolor ratione dolorem fuga aperiam, voluptatem commodi.</p>
            <div className="text-center text-primary">
            <a href="https://github.com/Lucky6400"><GitHubIcon style={{fontSize:"4rem", margin:"5px"}}/></a>          
            <a href="https://www.linkedin.com/in/lucky6400/"><LinkedInIcon style={{fontSize:"4rem", margin:"5px"}}/></a>
            <a href="https://www.instagram.com/lucky.jain_/"><InstagramIcon style={{fontSize:"4rem", margin:"5px"}}/></a>
            
            </div>
        </div>
      
    </div>
  )
}

export default About
