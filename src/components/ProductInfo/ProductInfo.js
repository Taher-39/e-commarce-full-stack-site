import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const ProductInfo = () => {
    const {_id} = useParams()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [productDetails, setProductDetails] = useState({})
    const { name, price, imageURL } = productDetails;
    useEffect(() => {
        fetch('https://pumpkin-tart-86699.herokuapp.com/product/'+ _id)
        .then(res => res.json())
        .then(data => {
            setProductDetails(data)
        })
    },[_id])

    const handleCheckout = () => {
        const newCheckout = { ...loggedInUser, productName: name, productPrice: price, time: new Date()};
        const url = `https://pumpkin-tart-86699.herokuapp.com/productCheckout`;
        fetch(url, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newCheckout)
            })
            .then(res => res.json())
            .then(data => {
                if(data){
                    alert('CheckOut Successfully...Check Order Page')
                }
            })
    }
    return (
        <div className="container pt-5">
            <h3>Checkout</h3>
            <div className="pd-info border border-3 rounded p-3">
                <div><img src={imageURL} width="100px" alt="" /></div>
                <div className="header row d-flex justify-content-around">
                    <p>Description</p>
                    <p>Quantity</p>
                    <p>Price</p>
                </div>
                <div className="body row d-flex justify-content-around">
                    <p>{name}</p>
                    <p>1</p>
                    <p>৳ {price}</p>
                </div>
            </div>
            <div className="d-flex flex-row-reverse">
                <button className="btn btn-success mt-2" onClick={handleCheckout}>CheckOut</button>
            </div>
        </div>
    );
};

export default ProductInfo;