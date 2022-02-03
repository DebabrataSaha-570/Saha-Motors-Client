import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import HomePageSingleReview from "../Home/HomePageSingleReview/HomePageSingleReview";
import './HomePageReview.css'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "#2A2A2A", borderRadius: '' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", backgroundColor: "#2A2A2A" }}
            onClick={onClick}
        />
    );
}



const HomePageReview = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://glacial-bastion-50505.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    const settings = {
        focusOnSelect: true,
        pauseOnHover: true,
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <div style={{ backgroundColor: '#f7f3f2' }} className="py-3">
            {/* <div style={{ backgroundColor: '#f5f7ff' }} className="py-3"> */}
            <div className="container my-4">
                <div className="review-div">
                    <h3>REVIEWS</h3>
                    <p>Check what our client says</p>

                </div>
                <Slider {...settings}>
                    {
                        reviews.map(review => <HomePageSingleReview review={review}></HomePageSingleReview>)
                    }
                    <div >
                        {/* <div class="card text-center" style={{ width: '27rem', height: '22rem' }}>

                        <img className='' style={{ borderRadius: '60%', width: '150px', margin: '0 auto' }} src="https://i.ibb.co/nmWtKcL/brandon-green-F-KSc-PBU93-I-unsplash.jpg" alt="" />
                        <div class="card-body">


                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                        </div>
                    </div> */}
                        {/* {
                        reviews.map(review => <HomePageSingleReview review={review}></HomePageSingleReview>)
                    } */}
                    </div>
                    {/* <div>
                    <img className='w-75' src="https://i.ibb.co/nmWtKcL/brandon-green-F-KSc-PBU93-I-unsplash.jpg" alt="" />
                </div> */}
                    {/* <div>
                    <img className='w-75' src="https://i.ibb.co/nmWtKcL/brandon-green-F-KSc-PBU93-I-unsplash.jpg" alt="" />
                </div> */}
                    {/* <div>
                    <img className='w-75' src="https://i.ibb.co/nmWtKcL/brandon-green-F-KSc-PBU93-I-unsplash.jpg" alt="" />
                </div> */}
                    {/* <div>
                    <img className='w-75' src="https://i.ibb.co/nmWtKcL/brandon-green-F-KSc-PBU93-I-unsplash.jpg" alt="" />
                </div> */}

                </Slider>
            </div>
        </div>


    );
};

export default HomePageReview;