import React from 'react';

const SingleBlog = ({ blog }) => {
    const { Heading, Paragraph, image } = blog
    return (
        <div className="col-md-4 d-flex justify-content-center mb-4">

            <div className="card shadow mt-4" style={{ width: '23rem' }}>
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{Heading}</h5>
                    <p class="card-text ">{Paragraph.split(' ').splice(0, 17).join(' ')}...</p>
                    <div > <a className="btn product-button">Read More</a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;