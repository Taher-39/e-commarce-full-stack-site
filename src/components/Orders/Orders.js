import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://pumpkin-tart-86699.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    console.log(orders)
    return (
        <div className='container'>
            <div className='text-center p-3'>
                <h3>Total {orders.length} orders</h3>
                <h4>Your Email: {orders[0]?.email}</h4>
            </div>
            {
                orders.length === 0 &&
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            }
            {
                orders.map(order => <div className='border border-2 rounded p-2 row d-flex justify-content-around mt-2 mb-2'>
                    <p><b></b> {order.productName}</p>
                    <p><b>Price:</b> {order.productPrice}</p>
                    <p><b>Date:</b> {(new Date(order.time)).toDateString('dd/MM/yyyy')}</p>
                    <button className='btn btn-danger'>✖</button>
                </div>)
            }
            <div className='d-flex flex-row-reverse'>
                <button className='btn btn-success p-2'>Process To Payment</button>
            </div>
            
        </div>
    );
};

export default Orders;