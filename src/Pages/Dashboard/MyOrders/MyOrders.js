import React, { useEffect, useState } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';
import useAuth from '../../../hooks/useAuth'


const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch(`https://glacial-bastion-50505.herokuapp.com/myOrder?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)

            })
    }, [user])

    const handleCancel = (id) => {

        const success = window.confirm('Are you sure you want to cancel this order ?')
        if (success) {
            fetch(`https://glacial-bastion-50505.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Order canceled successfully')
                        const newOrder = orders.filter(order => order._id !== id)
                        setOrders(newOrder)
                    }
                })
        }


    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 mb-3 fw-bold fs-3">
                    <h2>My Orders : {orders.length}</h2>
                </div>
            </div>
            <div className="row mb-5">
                {
                    orders.map(order => <SingleOrder order={order} key={order._id} handleCancel={handleCancel}></SingleOrder>)
                }



            </div>
        </div>
    );
};

export default MyOrders;