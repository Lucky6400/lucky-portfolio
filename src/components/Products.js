import React from 'react'
import Productlist from './Productlist'
import { projects } from './data/projects'

const Products = () => {
    return (
        <div className="mt-5 pt-4" id="projects">
            <div className="text-center">
                <h1 className="fw-bold">Quality and perfection. It's Lucky's projects</h1>
                <p>A brief info about some of my best creations, contact me to know more.</p>
            </div>

            <div className="row mt-4 pt-3 justify-content-center">

                {projects.map((item, i) => (
                    <Productlist key={i} img={item.img} link={item.link} name={item.name}
                    description={item.description}
                />
                ))}
                
            </div>
        </div>
    )
}

export default Products
