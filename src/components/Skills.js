import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { skillsData } from './data/skills'
import './skills.css'
const Skills = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="text-center w-100">
                <h1 className="fw-bold">Skills</h1>
                <p>Following tools I use to provide solutions.</p>
            </div>
            <div className="row my-4 w-lg-50 mx-auto justify-content-center">
                {skillsData.map((item, index) => (
                    <div key={index} className="col-lg-2 col-md-4  my-2 col-4">
                        <CircularProgressbarWithChildren className='circle-bar rounded-circle shadow-lg' value={item.value}
                        strokeWidth={6}
                        styles={{ path: { stroke: '#8100F2', strokeLinecap: 'butt', } }}>
                            <img src={item.img} alt="" className="w-75 h-75 rounded-circle img-in-bar" />
                            <div className="circle-text">
                                {item.value}%
                            </div>
                        </CircularProgressbarWithChildren>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skills