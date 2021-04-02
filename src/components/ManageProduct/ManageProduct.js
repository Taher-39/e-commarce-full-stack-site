import React from 'react';

const ManageProduct = (props) => {
    const { name, price, weight, imageURL, _id } = props.pd;
    const handlePdDelete = () => {
        fetch(`https://pumpkin-tart-86699.herokuapp.com/delete/${_id}`, {
             method: 'DELETE'
         })
         .then(res => res.json())
         .then(result => {
            if(result){
                alert('product deleted')
            }
         })
    }
    return (
        <div>
            <div className="border border-3 rounded p-2 bg-light">
                <div className="body row d-flex justify-content-around">
                    <p>{name}</p>
                    <p>{weight}</p>
                    <p>৳{price}</p>
                    <button className='btn btn-danger' onClick={handlePdDelete}>✖</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;