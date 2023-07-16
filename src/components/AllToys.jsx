import React, { useRef, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageTitle from './PageTitle';
import Card from './Card';

const AllToys = () => {

    const searchRef = useRef();
    const toys = useLoaderData();
    const [searchQuery, setSearchQuery] = useState(toys);


    const handleSearch = event => {
        event.preventDefault();
        const query = searchRef.current.value;
        fetch(`https://kidzplay-server.vercel.app/search?toyName=${query}`)
            .then(res => res.json())
            .then(data => {
                setSearchQuery(data);
            });
    };


    return (
        <div className='px-5 lg:px-18'>
            <PageTitle title='All Toys'></PageTitle>
            <h1 className='text-5xl text-center font-bold mt-28'>Total toys: {toys?.length}</h1>
            <div className='flex justify-center items-center my-5'>
                <input
                    type="text"
                    placeholder="Search by Toy Name"
                    className="input input-bordered input-error w-full mr-2 max-w-xs"
                    ref={searchRef}
                />
                <button className='btn-kidzplay' onClick={handleSearch}>Search</button>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 mt-20 gap-5 mx-auto">
                {searchQuery &&
                    searchQuery?.map(toy =>
                        <Card
                            key={toy._id}
                            toy={toy}
                        ></Card>
                    )
                }
            </div>
        </div>
    );
};

export default AllToys;
