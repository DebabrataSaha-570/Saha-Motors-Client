import React, { useEffect, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import SingleCar from '../SingleCar/SingleCar';

const AllCars = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])


    return (
        <>
            <Navbar></Navbar>
            <div className="container mt-3 mb-5">
                <h3 className='text-center'>All available cars</h3>
                {products.length > 0 ? <div className="row">
                    {
                        products.map(product => <SingleCar key={product._id} product={product} ></SingleCar>)
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
            <Footer></Footer>
        </>
    );
};

export default AllCars;