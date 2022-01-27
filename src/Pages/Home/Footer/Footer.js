import React from 'react';
import car1 from '../../../images/car-10.jpg'
import Copyright from '../Copyright/Copyright';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <section className="p-5 saha-motors-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h5>ABOUT SAHA-MOTORS</h5>
                            <hr />
                            <p style={{ color: '#9B9FA5' }}>rony actually meditation, occupy mumblecore wayfarers organic pickled 90's. Intelligentsia as actually +1 meh photo booth.</p>

                            <p style={{ color: '#9B9FA5' }}>Intelligentsia as actually +1 meh photo booth.</p>
                        </div>
                        <div className="col-md-2">
                            <h5>FROM FLICKER</h5>
                            <hr />
                            <div className="row">
                                <div className="col-md-5">
                                    <img className='img-fluid' src={car1} alt="" />
                                </div>
                                <div className="col-md-5">
                                    <img className='img-fluid' src={car1} alt="" />
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-md-5">
                                    <img className='img-fluid' src={car1} alt="" />
                                </div>
                                <div className="col-md-5">
                                    <img className='img-fluid' src={car1} alt="" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <img className='img-fluid' src={car1} alt="" />
                                </div>
                                <div className="col-md-5">
                                    <img className='img-fluid' src={car1} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <h5>RECENTLY LAUNCHED</h5>
                            <hr />
                            <div className='d-flex '>
                                <img width="80px" height="70px" src={car1} alt="" />
                                <div className='p-2'>
                                    <h6 >Silver Down 2020 in USA</h6>
                                    <hr />
                                    <span style={{ color: '#B18F6A' }} className='fw-bold'>$10000</span>
                                </div>

                            </div>
                            <div className='d-flex '>
                                <img width="80px" height="70px" src={car1} alt="" />
                                <div className='p-2'>
                                    <h6 >Silver Down 2020 in USA</h6>
                                    <hr />
                                    <span style={{ color: '#B18F6A' }} className='fw-bold'>$10000</span>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <h5>RECENT POSTS</h5>
                            <hr />

                            <small> <a href="#">- Latest Automobile News in Bangladesh</a></small>
                            <br />
                            <small> <a href="#">- Stories Behind Car Brand Names</a></small>
                            <br />
                            <small> <a href="#">- Tata HBX EV Launch On the Cards</a></small>
                            <br />
                            <small> <a href="#">- Auto Expo 2020: Day 3 Highlights</a></small>
                            <br />
                            <small> <a href="#">- Stories Behind Car Brand Names</a></small>
                        </div>
                    </div>
                </div>
            </section>
            <Copyright></Copyright>
        </>
    );
};

export default Footer;