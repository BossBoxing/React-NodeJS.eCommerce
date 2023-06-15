import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {

    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: 0,
        image: ''
    })

    const handleInput = (event) => {
        setProduct({...product, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(product)
        axios.post('http://localhost:9000/products', product)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="flex justify-center rounded bg-gray-400">
                <div className="flex justify-center rounded bg-gray-400">
                    <form onSubmit={handleSubmit}>
                        <h1>Add Product</h1>
                        <br />
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Name :
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleInput}
                            autoComplete="name"
                            className="rounded"
                            placeholder="name" />
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Category Name :
                        </label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            onChange={handleInput}
                            autoComplete="category"
                            className="rounded"
                            placeholder="category" />
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Price :
                        </label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            onChange={handleInput}
                            className="rounded"
                            autoComplete="price"
                            placeholder="price" />
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Image Url :
                        </label>
                        <input
                            type="text"
                            name="image"
                            id="image"
                            onChange={handleInput}
                            className="rounded"
                            autoComplete="image"
                            placeholder="image-url" />
                        <br />
                        <br />
                        <button type="submit" className="bg-white rounded hover:bg-slate-800">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddProduct;