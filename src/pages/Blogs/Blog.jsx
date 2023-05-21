import React from 'react';
import PageTitle from '../../components/PageTitle';

const Blog = () => {
    return (
        <div>
            <PageTitle title='Blogs'></PageTitle>
            <div>
                <h2 className='font-bold text-xl text-coral' id='q1'>1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p id='a1'>
                    <span className='text-black font-bold text-2xl'>Ans: </span>
                    Access tokens are credentials issued to clients for accessing protected resources, while refresh tokens are used to obtain new access tokens when they expire. Access tokens should be stored securely in memory, while refresh tokens should be stored securely, such as in HTTP-only secure cookies.
                </p>

                <h2 className='font-bold text-xl text-coral' id='q2'>2. Compare SQL and NoSQL databases?</h2>
                <p id='a2'>
                    <span className='text-black font-bold text-2xl'>Ans: </span>
                    SQL databases are based on a structured data model with predefined schemas and are suitable for complex, structured data. NoSQL databases offer flexibility and scalability for unstructured or semi-structured data and are well-suited for dynamic and rapidly changing data requirements.</p>

                <h2 className='font-bold text-xl text-coral' id='q3'>3.
                    What is MongoDB aggregate and how does it work?
                </h2>
                <p id='a3'>
                    <span className='text-black font-bold text-2xl'>Ans: </span>
                    MongoDB's aggregation framework is a powerful feature that allows for advanced data processing and analysis within the database. It supports various operations like filtering, grouping, sorting, and calculating aggregations using a pipeline approach..
                </p>

                <h2 className='font-bold text-xl text-coral' id='q4'>4.What is express js? What is Nest JS ?</h2>
                <p id='a4'>
                    <span className='text-black font-bold text-2xl'>Ans: </span>
                    Express.js is a minimalist web application framework for Node.js, while Nest.js is a progressive framework built on top of Express.js for building scalable server-side applications..
                </p>
            </div>
        </div>
    );
};

export default Blog;
