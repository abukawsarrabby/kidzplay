import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { AuthContext } from '../providers/AuthProviders';

const CardItems = ({ category }) => {
    const final = category.category;
    // const { user, loading } = useContext(AuthContext);
    const [toys, setToys] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/toy?subCategory=${final}`)
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