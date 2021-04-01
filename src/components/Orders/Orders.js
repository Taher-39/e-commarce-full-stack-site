import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // useEffect(() => {
    //     fetch('https://pumpkin-tart-86699.herokuapp.com/orders?email=' + loggedInUser.email)
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