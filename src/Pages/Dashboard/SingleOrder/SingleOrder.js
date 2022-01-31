import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

const SingleOrder = ({ order, handleCancel }) => {

    const { image, name, price, description } = order?.CarInfo;
    const { _id, status } = order


    return (
        <div className="col-md-3">
            <div className="card shadow mt-3" style={{ width: '19rem' }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p class="card-text ">{description.split(' ').splice(0, 17).join(' ')}...</p>
                    <div className='d-flex justify-content-between'>
                        <button className='btn btn-danger'>{status}</button>
                        <button onClick={() => handleCancel(_id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOrder;