import React from 'react'
import docker from '../img/dockerCert.png'
import react from '../img/reactCert.png'
import mongo from '../img/mongoDBCert.png'
import webdev from '../img/webdevCert.png'
import './certificates.css'

const Certificates = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="text-center w-100">
                <h1 className="fw-bold">Certificates</h1>
                <p>Things obtained from hardwork and determination</p>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={react} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={webdev} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={docker} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={mongo} className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev bg-primary bg-gradient" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next bg-primary bg-gradient" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Certificates
