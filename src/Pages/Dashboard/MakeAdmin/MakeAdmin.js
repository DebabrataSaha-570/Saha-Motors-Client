import React from 'react';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()

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
                        <input type="text" className="form-control" placeholder="shuvo@gmail.com" aria-describedby="button-addon2" />
                        <button className="btn admin-button" type="submit" id="button-addon2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;