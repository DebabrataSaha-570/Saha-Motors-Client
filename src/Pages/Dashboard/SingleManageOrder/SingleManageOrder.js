import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

const SingleManageOrder = ({ order, handleDeleteOrder, handleUpdateOrder }) => {
    const { _id, email, displayName, status } = order;
    const { name } = order.CarInfo;

    return (
        <tr>
            <th >{displayName}</th>
            <td>{email}</td>
            <td>{name}</td>
            <td>Credit Card</td>
            {status === 'pending' && <td className="text-warning">{status}</td>}
            {status === 'Shipped' && <td className="text-success">{status}</td>}

            <td>
                {status === 'pending' && <button onClick={() => handleUpdateOrder(_id)} className='btn btn-success '>Ship Order</button>}

                {status === 'Shipped' && <button className='btn btn-success disabled'>Ship Order</button>}
                <button onClick={() => handleDeleteOrder(_id)} className='btn btn-danger ms-2'>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>

    );
};

export default SingleManageOrder;