import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddProduct = () => {

    function PostProduct()
    {
        axios.post('http://localhost:9000/products', () => {
        
        })
    }

    return (
        <>
            <div className="flex justify-center rounded bg-gray-400">
                <div className="flex justify-center rounded bg-gray-400">
                    <form>
                        <h1>Add Product</h1>
                        <br/>
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Name :
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            className="rounded"
                            placeholder="name" />
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Price :
                        </label>
                        <input
                            type="text"
                            name="price"
                            id="price"
                            className="rounded"
                            autoComplete="price"
                            placeholder="price" />
                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Image Url :
                        </label>
                        <input
                            type="text"
                            name="image-url"
                            id="image"
                            className="rounded"
                            autoComplete="image-url"
                            placeholder="image-url" />
                        <br/>
                        <br/>
                        <button className="bg-white rounded hover:bg-slate-800">
                            Add Product
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddProduct;