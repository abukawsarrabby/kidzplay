import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
        AOS.init({
            offset: 200,
            duration: 2000,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);



    return (
        <div>
            <div className="grid md:grid-cols-4 gap-5 my-10">
                {toys &&
                    toys?.map(toy =>
                        <Card
                            data-aos="fade-right"
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