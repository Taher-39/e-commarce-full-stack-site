// import React from 'react';

// const Admin = () => {
//     return (
//         <div className="container">
//             <table>
//                 <tr>
//                     <td><input className="form-control" type="text" name="pdName" id="pdName" placeholder="Enter Name" /></td>
//                     <td><input className="form-control" type="number" name="pdWeight" id="pdWeight" placeholder="Enter Weight" /></td>
//                 </tr>
//                 <tr>
//                     <td><input className="form-control" type="number" name="pdPrice" id="pdPrice" placeholder="Enter Price" /></td>
//                     <td><input className="form-control" type="file" name="pdImg" id="pdImg" /></td>
//                 </tr>
//             </table>
//         </div>
        
//     );
// };

// export default Admin;

import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null);


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
            <h1>Add Your Product here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input className="form-control mb-2 w-50" name="pdName" placeholder='Enter Name' ref={register} />
            
                <input className="form-control mb-2 w-50" name="pdWeight" type="number" placeholder='Enter Weight' ref={register} />
            
                <input className="form-control mb-2 w-50" name="pdPrice" type="number" placeholder='Enter Price' ref={register} />
                
                <input className="form-control mb-2 w-50" name="pdImg" type="file" onChange={handleImageUpload} />
                
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default Admin;