import React, { useState, useEffect } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct'
const ManageProducts = () => {
    const [allProducts, setProducts] = useState([])
    useEffect(() => {
        fetch('https://glacial-bastion-50505.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const handleDelete = (id) => {

        const success = window.confirm('Are you sure, you want to delete this product?')
        if (success) {
            fetch(`https://glacial-bastion-50505.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const newProducts = allProducts.filter(product => product._id !== id)
                        setProducts(newProducts)
                    }
                })
        }

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 mb-3 fw-bold fs-3">
                    <h2>Manage Products</h2>
                </div>
            </div>
            {allProducts.length > 0 ? <div className="row mb-5">
                {
                    allProducts.map(product => <SingleProduct key={product._id} product={product} handleDelete={handleDelete}></SingleProduct>)
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

export default ManageProducts;