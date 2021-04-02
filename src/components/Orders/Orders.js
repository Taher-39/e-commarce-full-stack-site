import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css'
const Orders = () => {
    const [orders, setOrders] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://pumpkin-tart-86699.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div className="orders">
            <div className='container'>
                <div className='text-center p-3'>
                    <h3>Total {orders.length} orders</h3>
                    <h4>Your Email: {loggedInUser.email}</h4>
                </div>
                {
                    orders.length === 0 && loggedInUser.email &&
                    <div className="d-flex justify-content-center mt-5">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
                {
                    orders.map(order => <div className='border border-2 rounded p-2 row d-flex justify-content-around mt-2 mb-2 bg-light'>
                        <p>{order.productName}</p>
                        <p><b>Price:</b> {order.productPrice}</p>
                        <p><b>Date:</b> {(new Date(order.time)).toDateString('dd/MM/yyyy')}</p>
                        <button className='btn btn-danger'>✖</button>
                    </div>)
                }
                {
                    orders.length &&
                    <div className='d-flex flex-row-reverse'>
                        <button className='btn btn-info p-2'>Process To Payment</button>
                    </div>

                }
            </div>
        </div>
    );
};

export default Orders;