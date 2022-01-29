import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './SingleCar.css'

const SingleCar = ({ product, handleByNow }) => {
    console.log('product', product)
    const { image, name, description, price, _id } = product

    return (

        <div className="col-md-4">

            <div className="card shadow mt-4" style={{ width: '23rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p class="card-text ">{description.split(' ').splice(0, 17).join(' ')}...</p>
                    <div className="d-flex justify-content-between">
                        <h4>${price}</h4>
                        <Link to={`/carDetail/${_id}`}>
                            <a className="btn product-button">By Now</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleCar;