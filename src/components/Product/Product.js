import React from 'react';
import { useHistory } from 'react-router';

const Products = (props) => {
    const { name, price, weight, imageURL,_id } = props.pd;
    const history = useHistory()
    const handleBuyProduct = (_id) => {
        history.push(`/product/${_id}`)
    }
    return (
        <div className="col-md-4 d-flex justify-content-center">
            <div className='border border-2 rounded m-3'>
                <img style={{ height: '300px', width: '300px'}} src={imageURL} alt="" />
                <div className="description text-center p-3">
                    <h5>{name} {weight} {price}TK</h5>
                    <button className="btn btn-warning" onClick={() => handleBuyProduct(_id)} >Buy Now</button>
                </div>
            </div>

        </div>
    );
};

export default Products;