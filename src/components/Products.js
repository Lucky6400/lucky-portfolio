import React from 'react'
import Productlist from './Productlist'
import projectOne from '../img/project1.png'
import projectTwo from '../img/project2.png'
import projectThree from '../img/project3.png'
import projectFour from '../img/project4.png'
import projectFive from '../img/project5.png'
import projectSix from '../img/project6.png'

const Products = () => {
    return (
        <div className="mt-5 pt-4" id="projects">
            <div className="text-center">
                <h1 className="fw-bold">Quality and perfection. It's Lucky's projects</h1>
                <p>A brief info about some of my best creations, contact me to know more.</p>
            </div>

            <div className="row mt-4 pt-3 justify-content-center">

                <Productlist img={projectOne} link={"https://lucky-crypto.netlify.app/"} name="React Crypto App"
                    description="A React JS Crypto Currency application that provides info about all cryptocurrencies, gives news about those. It has search and filter features. UI built using Tailwind CSS. Data coming from Rapid API."
                />
                <Productlist img={projectTwo} name="MERN Blog App"
                    link={"https://lucky-blog.netlify.app/"}
                    description="A MERN Stack Blog application that is filled with features of a decent blog application. It has features of create, update, delete a post. Sort feature so that you can fetch posts by categories and users. You can Register, Login and update your profile, even profile picture"
                />
                <Productlist img={projectThree} name="React LinkedIn Clone"
                    link={"#"}
                    description="A LinkedIn Clone built using React and Firebase and bootstrap 5. Used Redux for Authentication, Firebase as a database. You can create a post, sign up, sign in, add profile picture. The UI design looks exactly like Linkedin. This is still work in progress."
                />
                <Productlist img={projectFour} name="Google Keep Clone"
                    link={"#"}
                    description="A Google Keep Clone built using MERN Stack and Bootstrap 5. Used Context API for State Management, MongoDB as a database. You can create, read, update and delete a todo, sign up, sign in. The UI design looks almost like Google Keep. This is not hosted anywhere."
                />
                <Productlist img={projectFive} name="Admin Dashboard"
                    link={"#"}
                    description="A full stack admin dashboard built using React JS, firebase, SaSS and Bootstrap 5. It has features of Authentication, CRUD, Image upload. Design is extremely eye pleasing and I also used Material UI charts, tables, icons, and other components. This is work in progress."
                />
                 <Productlist img={projectSix} name="React Social Media"
                    link={"https://lucky-social.netlify.app/"}
                    description="A full stack socail media built using React JS, firebase and Tailwind CSS. It has features of Authentication, CRUD, Image upload. You can set profile picture, upload posts with photo. Realtime data fetching is available."
                />

            </div>
        </div>
    )
}

export default Products
