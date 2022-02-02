import React from 'react';
import './Welcome.css'
const Welcome = () => {
    return (
        <section className="container my-5">
            <div className='headingDiv'>
                <h2>WELCOME TO SAHA MOTORS</h2>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 p-3">
                    <h4>NEW CAR RELEASED TODAY ON SALE</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius labore nesciunt, tempora molestiae quo autem reprehenderit amet error dolores tempore delectus inventore rerum animi facere!</p>
                    <img className='img-fluid' src="https://i.ibb.co/ftYSS5c/devon-janse-van-rensburg-j-LS30-AO49-DM-unsplash.jpg" alt="" />
                </div>



                <div className="col-md-6">
                    <h5>ASK A CAR DEALER BEFORE BUYING</h5>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item my-3 border">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed homepage-accordion-heading p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    What is the on-road price of the car?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia praesentium vel, libero hic facere quam numquam amet necessitatibus quibusdam dicta velit dolor nemo cum! Quos voluptatem ipsa totam magni accusantium.</div>
                            </div>
                        </div>
                        <div class="accordion-item my-3 border">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed homepage-accordion-heading p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What is covered under warranty?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, eum! Consequuntur ut dolore qui, explicabo unde aperiam architecto iste fuga nulla est optio iure odio sunt minus aut, culpa et!</div>
                            </div>
                        </div>
                        <div class="accordion-item my-3 border">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed homepage-accordion-heading p-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Where is the nearest service center?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum neque veritatis ad quo repellat, cupiditate, numquam voluptatum voluptatibus est earum laudantium maxime libero praesentium soluta vel nam nobis minima exercitationem?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Welcome;