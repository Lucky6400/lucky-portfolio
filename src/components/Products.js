import React from 'react'
import Productlist from './Productlist'
import { products } from '../data'

const Products = () => {
    return (
        <div className="mt-5 pt-4">
            <div className="text-center">
                <h1 className="fw-bold">Quality and perfection. It's Lucky's projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto.</p>
            </div> 

            <div className="row mt-4 pt-3 justify-content-center">
                {products.map((item)=>(
                    <Productlist key={item.id} name={item.name} desc={item.desc} date={item.date}/>
                ))}
               
                </div>
        </div>
    )
}

export default Products
