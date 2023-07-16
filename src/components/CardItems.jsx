import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardItems = ({ category }) => {
    const categorys = category.category;
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://kidzplay-server.vercel.app/toy?subCategory=${categorys}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            });
    }, []);



    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5 mx-auto">
            {toys &&
                toys?.slice(0, 3).map(toy =>
                    <Card
                        key={toy._id}
                        toy={toy}
                    ></Card>
                )
            }
        </div>

    );
};

export default CardItems;