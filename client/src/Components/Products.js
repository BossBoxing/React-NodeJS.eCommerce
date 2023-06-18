import axios, { Axios } from 'axios';
import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Product() {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/products')
        .then(
            res => res.json())
        .then(
            result => {
                setProducts(result)
                console.log(result)
            }
        )
    })

    const DeleteProduct = async (id) => {
        try{
            console.log(id)
            const res = await axios.delete(`http://localhost:9000/products/delete/${id}`);
            if(res.data.success){
                alert(res.data.msg);
            }
        }
        catch(err){
            console.error(err);
        }
    }

    const EditProduct = async (product) => {
        try{
            
        }
        catch(err)
        {
            console.error(err)
        }
    }

    return (
        <>
            <div>
                <h1 className="p-5">
                    Products
                </h1>

                <Link to="/product/add" className="ml-5 rounded bg-green-700 hover:bg-green-500 p-1 text-white">Add Product</Link>
            </div>
            <div className="grid grid-cols-1 gap-4 p-6 lg:grid-cols-5 sm:grid-cols-2">
                {Products.map(p => (
                    <div className="card">
                        <img src={p.image} alt="Product Img" className="w-full h-5/6"/>
                        <p className="text-left font-bold ml-1 mt-2"> Name: {p.name} </p>
                        <p className="text-left font-bold ml-1"> Price: {p.price.toLocaleString()} Baht</p>
                        <button onClick={() => DeleteProduct(p._id)} className=" rounded text-white bg-red-600 hover:bg-red-400 ml-1 w-5">X</button>
                        <Link to={`/product/add/${p._id}`} style={{marginRight: "10px"}}><button className=" rounded text-white bg-yellow-400 hover:bg-yellow-200 ml-1 w-5">Edit</button></Link>
                    </div>
                ))}
            </div >
        </>
    );
}