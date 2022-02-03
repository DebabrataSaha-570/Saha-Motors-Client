import React from 'react';
import Rating from 'react-rating';

const HomePageSingleReview = ({ review }) => {
    const { photoURL, email, description, displayName, ratings, designation } = review;
    return (
        <div >
            <div class="card my-5 text-center" style={{ width: '27rem', height: '25rem', boxShadow: '1px 3px 3px rgb(0 0 0 / 2%)', border: '10px solid white', borderRadius: '5px' }}>

                <img className='' style={{ borderRadius: '50%', width: '95px', height: '95px', backgroundColor: 'white', margin: '0 auto', marginTop: '-47px' }} src={photoURL} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{displayName} </h5>
                    <p class="card-subtitle text-muted">{designation}</p>

                    <small className='my-3'>
                        <Rating style={{ color: '#ffb400' }}
                            readonly
                            initialRating={ratings}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        />
                    </small>



                    <p class="card-text mt-2">{description}</p>

                </div>
            </div>
        </div>
    );
};

export default HomePageSingleReview;