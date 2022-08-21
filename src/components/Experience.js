import React from 'react'
import six30 from '../img/six30.jpg'
const Experience = () => {
    return (
        <div className="mt-5 pt-4 px-lg-5">
            <div className="text-center">
                <h1 className="fw-bold">Work Experience</h1>
                <p>Know more about my contribution towards the growth of organizations.</p>
            </div>
            <div className="w-100 row justify-content-center m-0 p-0">
                <div className="col-lg-6 my-3 p-0 m-0">
                    <div className="w-100 text-center">
                        <h2 >
                            Software Development Engineer 1
                        </h2>
                        <p>May 2022 - <em>present</em></p>
                    </div>
                    <div className="mt-3 mx-auto companyImg shadow">
                        <img src={six30} alt="six30" className="w-100" />
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
                        <li>
                            Develop web applications (coding frontend and backend).
                        </li>
                        <li>
                            Take on Heavy projects and collaborate with team members to build effective solutions.
                        </li>
                        <li>
                            Approach and fix a wide range of issues on both backend and frontend side.
                        </li>
                        <li>
                            Build a highly scalable, customizable and reusable code to help speed up the work on upcoming projects.
                        </li>
                    </ul>

                </div>
            </div>
            <div className="w-100 d-flex flex-wrap flex-row-reverse justify-content-center m-0 p-0">
                <div className="col-lg-6 my-3 p-0 m-0">
                    <div className="w-100 text-center">
                        <h2 >
                            Software Development Engineer 1 intern
                        </h2>
                        <p>Feb 2022 - May 2022</p>
                    </div>
                    <div className="mt-3 mx-auto companyImg shadow">
                        <img src={six30} alt="six30" className="w-100" />
                    </div>
                </div>
                <div className="col-lg-6 p-3 my-3 bg-theme shadow-lg position-relative rounded-0 text-white">
                    <div className="fancyBlob bg-theme-2"></div>
                    <div className="fancyBlob bg-theme-2"></div>
                    <div className="fancyBlob bg-theme-2"></div>
                    <ul className="exp-detail">
                        <h2 style={{ zIndex: "2" }} className="w-100 text-center">
                            Details
                        </h2>
                        <li>
                            Work on Real Projects and collaborate with team members.
                        </li>
                        <li>
                            Learn how the complex projects are built.
                        </li>
                        <li>
                            Build attractive Web designs using HTML and CSS.
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Experience