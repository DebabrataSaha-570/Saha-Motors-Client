import React, { useState, useEffect } from 'react';
import SingleCar from '../../Products/SingleCar/SingleCar';
import './HomePageCars.css'

const HomePageCars = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://glacial-bastion-50505.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className="container my-5">
            <div className='featured-car-div'>
                <h2 >FEATURED CARS</h2>
                <h5>Our latest product</h5>
            </div>
            {products.length ? <div className="row ">
                {
                    products.slice(0, 6).map(product => <SingleCar product={product} key={product._id} ></SingleCar>)
                }
            </div>
                :
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

        </div>
    );
};

export default HomePageCars;