import React from 'react';
import './Review.css'
const Review = () => {
    const handleReviewSubmit = (e) => {
        e.preventDefault()

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 fw-bold fs-3">
                    <h2>Review</h2>
                </div>
            </div>
            <div className="row m-3 ">
                <div className="col-md-6 p-5 shadow">
                    <form onSubmit={handleReviewSubmit}>
                        <div className="mb-4">
                            <input type="text" className="form-control" placeholder='Your Name' />
                        </div>
                        <div className="mb-4">
                            <input type="text" className="form-control" placeholder='Company Name, Designation' />
                        </div>
                        <div className="mb-4">
                            <input type="number" className="form-control" placeholder='Ratings (1-5)' />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Description'></textarea>
                        </div>
                        <button className='btn  addReview-button' type="submit">Submit</button>
                    </form>
                </div>



            </div>
        </div>
    );
};

export default Review;