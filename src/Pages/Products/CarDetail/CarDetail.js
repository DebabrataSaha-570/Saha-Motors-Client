import React, { useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';

const CarDetail = () => {
    const [car, setCar] = useState({})
    let { id } = useParams()
    fetch(`http://localhost:5000/singleProduct/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    return (
        <>
            <Navbar></Navbar>
            <h3>This is car detail component {id}</h3>
            <Footer></Footer>
        </>
    );
};

export default CarDetail;