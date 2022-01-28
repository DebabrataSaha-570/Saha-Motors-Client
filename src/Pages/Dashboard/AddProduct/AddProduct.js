import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const handleProductSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 fw-bold fs-3">
                    <h2>Add Product</h2>
                </div>
            </div>
            <div className="row m-3 ">
                <div className="col-md-6 p-5 shadow">
                    <form onSubmit={handleProductSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Product Title</label>
                            <input type="email" className="form-control" placeholder='Enter title' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput2" className="form-label">Product Image</label>
                            <input type="email" className="form-control" placeholder='Enter Image URL' />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Enter Description'></textarea>
                        </div>
                        <button className='btn  addProduct-button' type="submit">Submit</button>
                    </form>
                </div>



            </div>
        </div>
    );
};

export default AddProduct;