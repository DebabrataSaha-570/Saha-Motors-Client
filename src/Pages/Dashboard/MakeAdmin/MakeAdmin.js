import React, { useRef, useState } from 'react';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const emailRef = useRef()
    const [success, setSuccess] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const emailValue = emailRef.current.value;
        const user = { email: emailValue }
        fetch('https://glacial-bastion-50505.herokuapp.com/addAdmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setSuccess(true)
                    emailRef.current.value = ''

                }
            })

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 mb-3 fw-bold fs-3">
                    <h2>Make Admin</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleFormSubmit} className="input-group mb-3">
                        <input ref={emailRef} type="email" className="form-control" placeholder="shuvo@gmail.com" aria-describedby="button-addon2" />
                        <button className="btn admin-button" type="submit" id="button-addon2">Submit</button>
                    </form>
                    {success && <div class="alert alert-success" role="alert">
                        Made Admin Successfully !
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;