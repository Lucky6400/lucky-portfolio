import React, { useState, useEffect } from 'react';
import reactlogo from '../img/react.png';
import node from '../img/node.png';
import firebase from '../img/firebase.png';
import js from '../img/js.png';
import mern from '../img/mern.png';
import tailwind from '../img/tailwind.jpg';
import sass from '../img/sass.png';
import docker from '../img/docker.png';
import './certificates.css';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "Node JS: The Complete Guide, Udemy (2022)",
    "Web Development: Internship, Testbook (2021-22)",
    "React JS: The Complete Guide , Udemy(2022)",
    "SaSS: Full Course, FreeCodeCamp YouTube (2022)",
    "The Complete JavaScript Course, Udemy (2022)",
    "Getting Started with Docker, Simplilearn (2022)"
];

const Certificates = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="container-fluid pt-5">
            <div className="text-center w-100">
                <h1 className="fw-bold">Certificates/Courses</h1>
                <p>Things obtained from hardwork and determination</p>
            </div>
            <div className="d-flex justify-content-center position-relative">
                <div className="skill-cont">
                    <div className="skill-text-cont">
                        <TextTransition
                            text={TEXTS[index % TEXTS.length]}
                            springConfig={presets.stiff}
                        />
                    </div>

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
                        <img src={firebase} alt="" className="img-skilled" />
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
                        <img src={tailwind} alt="" className="img-skilled" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Certificates
