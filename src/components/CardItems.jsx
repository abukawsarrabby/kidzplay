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
        <div>
            <div className="grid md:grid-cols-4 gap-5 my-10">
                {toys &&
                    toys?.map(toy =>
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

export default CardItems;