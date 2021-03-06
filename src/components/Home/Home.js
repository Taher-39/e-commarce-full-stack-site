import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://pumpkin-tart-86699.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="home row">
            {
                products.length === 0 &&
                    <div className="my-0 mx-auto mt-5">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div>
            }
            {
                products.map(pd => <Product pd={pd} key={pd._id}></Product>)
            }
            
        </div>
    );
};

export default Home;