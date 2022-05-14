import React from 'react'
import react from '../img/reactCert.png'
import mongo from '../img/mongoDBCert.png'
import webdev from '../img/webdevCert.png'
import reactlogo from '../img/react.png'
import node from '../img/node.png'
import php from '../img/php.png'
import js from '../img/js.png'
import mern from '../img/mern.png'
import laravel from '../img/laravel.png'
import sass from '../img/sass.png'
import docker from '../img/docker.png'

import './certificates.css'

const Certificates = () => {





    return (
        <div className="container-fluid pt-5">
            <div className="text-center w-100">
                <h1 className="fw-bold">Certificates/Courses</h1>
                <p>Things obtained from hardwork and determination</p>
            </div>
            <div className="d-flex justify-content-center position-relative">
                <div className="skill-cont">
                    
                </div>
                <div className="circular-skill">

                    <div className="skill-one">
                        <img src={reactlogo} alt="" className="img-skilled" />
                    </div>
                    <div className="skill-two">
                        <img src={sass} alt="" className="img-skilled" />
                    </div>
                    <div className="skill-three">
                        <img src={node} alt="" className="img-skilled" />
                    </div>
                    <div className="skill-four">
                        <img src={php} alt="" className="img-skilled" />
                    </div>
                    <div className="skill-five">
                        <img src={docker} alt="" className="img-skilled" />
                    </div>
                    <div className="skill-six">
                        <img src={js} alt="" className="img-skilled" />
                    </div>
                    <div className="skill-seven">
                        <img src={mern} alt="" className="img-skilled" />
                    </div>
                    <div className="skill-eight">
                        <img src={laravel} alt="" className="img-skilled" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Certificates
