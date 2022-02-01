import React, { useState, useEffect } from 'react';
import SingleManageOrder from '../SingleManageOrder/SingleManageOrder'

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        fetch('https://glacial-bastion-50505.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data)
            })
    }, [])

    const handleDeleteOrder = (id) => {

        const success = window.confirm('Are you sure, you want to delete this order?')
        if (success) {
            fetch(`https://glacial-bastion-50505.herokuapp.com/deleteOrder/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const newOrders = allOrders.filter(order => order._id !== id)
                        setAllOrders(newOrders)
                    }
                })

        }

    }
    const handleUpdateOrder = (id) => {
        const confirm = window.confirm('Are you sure you want to approve this product?')
        if (confirm) {
            fetch(`https://glacial-bastion-50505.herokuapp.com/updateOrderStatus/${id}`, {
                method: 'PUT',
                body: JSON.stringify(
                    { status: 'Approved' }),

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    if (data.modifiedCount) {
                        alert('Order Approved Successfully')
                        fetch('https://glacial-bastion-50505.herokuapp.com/orders')
                            .then(res => res.json())
                            .then(data => {
                                setAllOrders(data)
                            })
                    }
                });
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mb-3 fw-bold fs-3">
                    <h2>Manage All Orders</h2>
                </div>
            </div>

            <div className="row">

                <div className="">
                    <table class="table table-responsive'">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Product</th>
                                <th scope="col">Pay With</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                allOrders.map(order => <SingleManageOrder key={order._id} order={order} handleDeleteOrder={handleDeleteOrder} handleUpdateOrder={handleUpdateOrder}></SingleManageOrder>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;