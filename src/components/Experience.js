import React from 'react'
import six30 from '../img/six30.jpg'
import { experienceData } from './data/experience'
const Experience = () => {
    return (
        <div className="mt-5 pt-4 px-lg-5">
            <div className="text-center">
                <h1 className="fw-bold">Work Experience</h1>
                <p>Know more about my contribution towards the growth of organizations.</p>
            </div>

            {experienceData.slice(0).reverse().map((item, index) => (
                <div key={index} className={`w-100 ${index % 2 === 0 ? ' row ' : '  d-flex flex-wrap flex-row-reverse '}row justify-content-center m-0 p-0`}>
                    <div className="col-lg-6 my-3 p-0 m-0">
                        <div className="w-100 text-center">
                            <h2 >
                                {item.title}
                            </h2>
                            <p>{item.from} - {item.to}</p>
                        </div>
                        <div className="mt-3 mx-auto companyImg bg-white shadow">
                            <img src={item.companyLogo} alt="logoOfCompany" className="w-100" />
                        </div>
                    </div>
                    <div className="col-lg-6 p-3 my-3 bg-theme rounded-0 position-relative shadow-lg text-white">
                        <div className="fancyBlob bg-theme-2"></div>
                        <div className="fancyBlob bg-theme-2"></div>
                        <div className="fancyBlob bg-theme-2"></div>

                        <ul className="exp-detail">
                            <h2 style={{ zIndex: "2" }} className="w-100 text-center">
                                Details
                            </h2>
                            {item.work.map((elem, i) => (
                                <li key={i}>
                                    {elem}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            ))}

            
        </div>
    )
}

export default Experience