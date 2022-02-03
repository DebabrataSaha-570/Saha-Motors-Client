import React, { useRef } from 'react';
import './Review.css'
import useAuth from '../../../hooks/useAuth'
import dummyUser from '../../../images/dummy-user.png'
const Review = () => {
    const { user } = useAuth()

    const nameRef = useRef()
    const companyRef = useRef()
    const ratingsRef = useRef()
    const descriptionRef = useRef()

    const handleReviewSubmit = (e) => {
        e.preventDefault()

        const nameValue = nameRef.current.value;
        const companyValue = companyRef.current.value;
        const ratingsValue = ratingsRef.current.value;

        const descriptionValue = descriptionRef.current.value;

        if (descriptionValue.split(' ').length > 50) {
            return alert('Please write review with in 50 words')
        }
        // if (parseInt(ratingsValue) >= 1 && parseInt(ratingsValue) <= 5) {
        //     return alert('Please give ratings between 1 to 5')
        // }
        const userReview = { email: user?.email, photoURL: user?.photoURL || dummyUser, displayName: nameValue, designation: companyValue, ratings: ratingsValue, description: descriptionValue }
        console.log(userReview)

        fetch('https://glacial-bastion-50505.herokuapp.com/addReview', {
            method: 'PUT',
            body: JSON.stringify(userReview),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.upsertedCount || data?.modifiedCount) {
                    alert('Review added successfully')
                    nameRef.current.value = ''
                    companyRef.current.value = ''
                    ratingsRef.current.value = ''
                    descriptionRef.current.value = ''
                }

            });

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
                            <input type="text" ref={nameRef} defaultValue={user?.displayName || ''} className="form-control" placeholder='Your Name' required />
                        </div>
                        <div className="mb-4">
                            <input type="text" ref={companyRef} className="form-control" placeholder='Company Name, Designation' required />
                        </div>
                        <div className="mb-4">
                            <input type="number" ref={ratingsRef} className="form-control" placeholder='Ratings (1-5)' required />
                        </div>
                        <div className="mb-3">
                            <textarea ref={descriptionRef} className="form-control" id="exampleFormControlTextarea1" rows="4" placeholder='Description (upto 50 words)' required></textarea>
                        </div>
                        <button className='btn  addReview-button' type="submit">Submit</button>
                    </form>
                </div>



            </div>
        </div>
    );
};

export default Review;