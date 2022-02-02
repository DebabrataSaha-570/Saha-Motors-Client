import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css'
const Navbar = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <nav className="navbar sticky-top  navbar-expand-lg navbar-dark saha-motors-navbar">
                <div className="container">
                    <Link to="/">
                        <a className="navbar-brand" href="#">Saha-Motors</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{ textDecoration: 'none' }} to="/home">
                                    <a className="nav-link active" aria-current="page" href="#" >Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                {user.email ?
                                    <a onClick={logOut} style={{ cursor: 'pointer' }} className="nav-link active" >Logout</a>
                                    :
                                    <Link to="/login">
                                        <a className="nav-link active" >Login</a>
                                    </Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link to="/contactUs">
                                    <a className="nav-link active" >Contact Us</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/allCars">
                                    <a className="nav-link active" >Explore</a>
                                </Link>
                            </li>
                            {user?.email && <li className="nav-item">
                                <Link to="/dashboard">
                                    <a className="nav-link active" >Dashboard</a>
                                </Link>
                            </li>}


                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;