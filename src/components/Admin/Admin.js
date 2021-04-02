import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    //manage product
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [products, setProducts] = useState([]);
    const [addProduct, setAddProduct] = useState(false)
    const [manageProduct, setManageProduct] = useState(false)

    useEffect(() => {
        fetch('https://pumpkin-tart-86699.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    
   

    const onSubmit = data => {
        const productInfo = {
            name: data.pdName,
            weight: data.pdWeight,
            price: data.pdPrice,
            imageURL: imageURL
        };
        const url = `https://pumpkin-tart-86699.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => console.log('loaded'))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'a43712f50d429ae3f3188da542c627a0');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then((response) => {
                setImageURL(response.data.data.display_url);
            })
            .catch((error) => {
                console.log(error);
            });

    }
    
    return (
        <div className="container">
            <div className='aside'>
                <button className='btn btn-success' onClick={() => setManageProduct(!manageProduct)}>Manage Product</button>
                <button className='btn btn-success' onClick={() => setAddProduct(!addProduct)}>addProduct</button>
            </div>
            <div className='view'>
                {
                    addProduct &&
                    <div className='add-product'>
                        <h1>Add Your Product here</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input className="form-control mb-2 w-50" name="pdName" placeholder='Enter Name' ref={register} />

                            <input className="form-control mb-2 w-50" name="pdWeight" type="number" placeholder='Enter Weight' ref={register} />

                            <input className="form-control mb-2 w-50" name="pdPrice" type="number" placeholder='Enter Price' ref={register} />

                            <input className="form-control mb-2 w-50" name="pdImg" type="file" onChange={handleImageUpload} />

                            <input className="btn btn-success" type="submit" />
                        </form>
                    </div>
                }
                <br/><hr/>
                {
                    manageProduct &&
                    <div className='manage-product'>
                    <h3>Manage Product</h3>
                    <div className="row d-flex justify-content-around p-2 bg-light">
                        <p>Name</p>
                        <p>Wight</p>
                        <p>Price</p>
                        <p>Action</p>
                    </div>
                    {
                        products.length === 0 &&
                        <div className="d-flex justify-content-around">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                    {
                        products.map(pd => <ManageProduct pd={pd} key={pd._id}></ManageProduct>)
                    }
                </div>}
                
            </div>
            
        </div>
    );
};

export default Admin;