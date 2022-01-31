import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
const SingleProduct = ({ product, handleDelete }) => {
    const { image, name, price, description, _id } = product
    return (
        <div className="col-md-4">

            <div className="card shadow mt-4" style={{ width: '20rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p class="card-text ">{description.split(' ').splice(0, 17).join(' ')}...</p>
                    <div className="d-flex justify-content-between">
                        <h4>${price}</h4>
                        <button onClick={() => handleDelete(_id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;