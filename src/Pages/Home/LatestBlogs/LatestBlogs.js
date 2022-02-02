import React from 'react';
import SingleBlog from '../../SingleBlog/SingleBlog';
import './LatestBlogs.css'

const blogsData = [
    {
        id: 1,
        Heading: '7 Ways to Improve Your Cars Fuel Efficiency',
        Paragraph: 'This tip is strictly for manual car owners, changing the gear according to your cars speed can save your fuel. Apply the gear which is the highest gear for your optimal speed so that your car never stalls.',
        image: 'https://i.ibb.co/VHMk1bC/nate-johnston-Pcb-JL9-CYSXs-unsplash.jpg'

    },
    {
        id: 2,
        Heading: 'Automakers Make a Move Toward Renewable Energy',
        Paragraph: 'The latest announcement in the trend toward electrification comes from Honda. The company recently stated that it plans to achieve a 40 percent goal in 2030, an 80 percent goal in 2035, and a 100 percent goal in 2040.  ',
        image: 'https://i.ibb.co/rMT2XnF/joey-banks-YApi-Wyp0lqo-unsplash.jpg'

    },
    {
        id: 3,
        Heading: 'Why Are Japanese Cars So Popular',
        Paragraph: 'Japanese has satisfied its customers with its products. Japanese used vehicles have gained fame and reputation around the globe. In 2021, the Japanese have exported 92,671 used cars in February, upscaled from January 2021. The units were increased by 21,183. In January 2021, it had 71,488 units. UAE is currently leading with most imported Japanese cars with 21,812 units in 2021, and Russia is in second place with 18,220 units.',
        image: 'https://i.ibb.co/nmWtKcL/brandon-green-F-KSc-PBU93-I-unsplash.jpg'

    },

]

const LatestBlogs = () => {
    return (
        <section className="container">
            <div className='blogs-header-div'>
                <h3>LATEST BLOGS</h3>
                <p>Check our recent posts</p>
                <p></p>
            </div>

            <div className="row">
                {
                    blogsData.map(blog => <SingleBlog key={blog.id} blog={blog}></SingleBlog>)
                }
            </div>
        </section>
    );
};

export default LatestBlogs;