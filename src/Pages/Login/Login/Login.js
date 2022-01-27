import React, { useRef, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import { useLocation, useHistory, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle, logInUser, user, error, isLoading } = useAuth()


    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const location = useLocation()
    const history = useHistory()


    const handleFormSubmit = (e) => {
        e.preventDefault()
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        const confirmPasswordValue = confirmPasswordRef.current.value;
        if (passwordValue !== confirmPasswordValue) {
            alert('Password did not match. Try again')
            return;
        }
        console.log(emailValue, confirmPasswordValue, passwordValue)
        logInUser(emailValue, confirmPasswordValue, location, history)

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <>
            <Navbar></Navbar>
            {!isLoading ? <section style={{ border: '1px solid lightGray', width: '510px', height: '450px', }} className="mx-auto mt-5 mb-2 px-5 py-4"  >
                <h3 >Please Login</h3>
                <form onSubmit={handleFormSubmit}>

                    <div class="mb-3">
                        <label for="email" class="form-label">Email Address</label>
                        <input ref={emailRef} type="email" class="form-control" id="email" placeholder='' />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input ref={passwordRef} type="password" class="form-control" id="password" placeholder='' />
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword" class="form-label">Confrim Password</label>
                        <input ref={confirmPasswordRef} type="password" class="form-control" id="confirmPassword" placeholder='' />
                    </div>
                    <button className="btn btn-primary w-100" type="submit">Login</button>


                </form>
                <div className="my-2 text-center">
                    <span >Don't have an account? <Link to="/register">Register</Link></span>
                </div>
            </section>
                :
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

            <div className="container w-50">
                {user?.email && <div class="alert alert-success" role="alert">
                    User Created Successfully !
                </div>}
                {error && <div class="alert alert-danger" role="alert">
                    {error}
                </div>}
            </div>

            <section style={{ display: 'flex', alignItems: 'center', width: '400px', margin: '0 auto' }}>
                <span style={{ flexGrow: 1, borderBottom: '1px solid lightGray', margin: '5px' }}></span>
                <span>Or</span>
                <span style={{ flexGrow: 1, borderBottom: '1px solid lightGray', margin: '5px' }}></span>
            </section>

            <section className="mt-3 mb-5" style={{ textAlign: 'center' }}>

                <button onClick={handleGoogleSignIn} className='btn rounded-pill' style={{ width: '450px', backgroundColor: 'white', border: '1px solid gray', cursor: 'pointer' }}>



                    <div className="d-flex align-items-center  ">

                        <div style={{ marginRight: '100px' }}>
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="" width="40px" />
                        </div>


                        <p style={{ marginTop: '2.5px' }}>Continue with google</p>

                    </div>

                </button>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Login;