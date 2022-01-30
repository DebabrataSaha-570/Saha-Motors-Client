import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import './CarDetail.css';

const CarDetail = () => {
    const [car, setCar] = useState({})
    let { id } = useParams()
    const { user } = useAuth()
    useEffect(() => {
        fetch(`https://glacial-bastion-50505.herokuapp.com/singleProduct/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCar(data)
            })

    }, [])
    const { image, name, color, condition, description, doors, engine, fuel, mileage, price, transmission, year } = car;

    const history = useHistory()
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()
    const addressRef = useRef()
    const creditCardRef = useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const nameValue = nameRef.current.value;
        const emailValue = emailRef.current.value;
        const phoneValue = phoneRef.current.value;
        const addressValue = addressRef.current.value;
        const creditCardValue = creditCardRef.current.value;


        const orderData = { CarInfo: car, displayName: nameValue, email: emailValue, phone: phoneValue, address: addressValue, creditCard: creditCardValue, status: 'pending' }

        fetch('https://glacial-bastion-50505.herokuapp.com/placeOrder', {
            method: 'POST',
            body: JSON.stringify(orderData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    alert('Your Order Placed Successfully! Our team member will contact with you soon.')
                    history.push('/dashboard')

                }
            });

    }
    return (
        <>
            <Navbar></Navbar>
            <section className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={image} alt="" />
                        <h2>{name}</h2>
                        <h5>${price}</h5>

                        <table class="table table-borderless border table-striped">

                            <tbody>

                                <tr>
                                    <th colspan="2" scope="col">Specification</th>
                                </tr>


                                <tr>

                                    <td>Condition </td>
                                    <td>: {condition}</td>
                                    <td>Milleage </td>
                                    <td>: {mileage}</td>

                                </tr>
                                <tr>

                                    <td>Year  </td>
                                    <td>: {year}</td>
                                    <td>Engine </td>
                                    <td>: {engine}</td>
                                </tr>
                                <tr>

                                    <td>Fuel </td>
                                    <td>: {fuel}</td>
                                    <td>Transmission </td>
                                    <td>: {transmission}</td>
                                </tr>
                                <tr>

                                    <td>Color </td>
                                    <td>: {color}</td>
                                    <td>Doors </td>
                                    <td>: {doors}</td>
                                </tr>

                            </tbody>
                        </table>

                        {/* Description  */}
                        <p>{description}</p>

                    </div>

                    <div className="col-md-5 ms-2  ">
                        <form onSubmit={handleFormSubmit} className='shadow p-5'>
                            <div class="mb-3">
                                <label for="exampleInputName" class="form-label">Name</label>
                                <input ref={nameRef} type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" defaultValue={user?.displayName || ''} placeholder='Enter Name' required />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={user?.email || ''} placeholder='Enter Email' required />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPhone" class="form-label">Phone Number</label>
                                <input ref={phoneRef} type="text" class="form-control" id="exampleInputPhone" aria-describedby="emailHelp" placeholder='Enter Phone Number' required />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputAddress" class="form-label">Address</label>
                                <input ref={addressRef} type="text" class="form-control" id="exampleInputAddress" aria-describedby="emailHelp" placeholder='Enter Address' required />

                            </div>
                            <div class="mb-3">
                                <label for="exampleInputCreditCard" class="form-label">Credit Card Number</label>
                                <input ref={creditCardRef} type="text" class="form-control" id="exampleInputCreditCard" aria-describedby="emailHelp" placeholder='Enter Credit Card Number' required />

                            </div>


                            <button type="submit" class="btn bookNow-button">Place Order</button>
                        </form>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default CarDetail;