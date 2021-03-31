import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // useEffect(() => {
    //     fetch('http://localhost:5000/orders?email=' + loggedInUser.email)
    //         .then(res => res.json())
    //         .then(data => setOrders(data));
    // }, [])
    return (
        <div>
            order area.
        </div>
    );
};

export default Orders;