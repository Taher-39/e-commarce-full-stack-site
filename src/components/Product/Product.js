import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'
const Products = (props) => {
    const { name, price, weight, imageURL,_id } = props.pd;
    const history = useHistory()
    const handleBuyProduct = (_id) => {
        history.push(`/product/${_id}`)
    }
    return (
        <div className="col-md-4 col-sm-12 col-xl-3 d-flex justify-content-center my-4  card-item">
            <div className='border border-2 rounded'>
                <img style={{ height: '300px', width: '270px'}} src={imageURL} alt="" />
                <div className="description text-center p-3 bg-secondary text-white">
                    <h5>{name} {weight} </h5>
                    <div className="row d-flex justify-content-around">
                        <h4><b>৳</b> {price}</h4>
                        <button className="btn btn-info" onClick={() => handleBuyProduct(_id)} >Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;