import React from 'react';
import car1 from '../../../images/car-9.jpg'
import car2 from '../../../images/car-11.jpg'
import car3 from '../../../images/car-12.jpg'

const Banner = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <img src='https://i.ibb.co/VHMk1bC/nate-johnston-Pcb-JL9-CYSXs-unsplash.jpg' className="d-block w-100" alt="..." /> */}
                        <img src='https://i.ibb.co/LZk5R7b/travis-essinger-3-V0-FGLkuey-A-unsplash.jpg' className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src='https://i.ibb.co/pyJDfsG/andre-tan-l-Rr-Nccxr-Tf-Q-unsplash.jpg' className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src='https://i.ibb.co/8gBpWJr/tyler-clemmensen-w-Lp-TPp2dzs-Y-unsplash.jpg' className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default Banner;