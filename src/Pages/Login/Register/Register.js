import React, { useState, useRef } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import { useHistory, Link, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Register = () => {
    const { registerUser, user, error, signInWithGoogle } = useAuth()

    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')

    const location = useLocation()
    const history = useHistory()



    const handleFormSubmit = (e) => {
        e.preventDefault()
        const firstNameValue = firstNameRef.current.value;
        const lastNameValue = lastNameRef.current.value;
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        const confirmPasswordValue = confirmPasswordRef.current.value;

        if (passwordValue !== confirmPasswordValue) {
            alert('password did not matched, try again')
            return;
        }
        const fullName = firstNameValue + ' ' + lastNameValue

        registerUser(emailValue, passwordValue, fullName, history)



    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    // if (user.email) {
    //     firstNameRef.current.value = ''
    //     lastNameRef.current.value = ''
    //     emailRef.current.value = ''
    //     passwordRef.current.value = ''
    //     confirmPasswordRef.current.value = ''

    // }
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <section style={{ border: '1px solid lightGray', width: '510px', height: '590px', }} className="mx-auto mt-3 mb-2 px-5 py-4"  >
                    <h3 >Create an account</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div class="mb-3">
                            <label for="firstName" class="form-label">First Name</label>
                            <input ref={firstNameRef} type="text" class="form-control" id="firstName" placeholder='' />
                        </div>
                        <div class="mb-3">
                            <label for="lastName" class="form-label">Last Name</label>
                            <input ref={lastNameRef} type="text" class="form-control" id="lastName" placeholder='' />
                        </div>
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
                        <button className='btn btn-primary w-100 ' type="submit">Create an account</button>


                    </form>
                    <div className="my-2 text-center">
                        <span >Already have an account? <Link to="/login">Login</Link></span>
                    </div>
                </section>

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
            </div>
            <Footer></Footer>
        </>
    );
};

export default Register;