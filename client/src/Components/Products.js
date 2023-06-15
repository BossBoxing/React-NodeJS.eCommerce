import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    return (
        <>
            <div>
                <h1 className="p-5">
                    Products
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-2 p-6">
                {Products.map(p => (
                    <div className="card">
                        <img src={p.image} width={200}/>
                        <p> Name: {p.name} </p>
                        <p> Price: {p.price}</p>
                    </div>
                ))}
            </div >
        </>
    );
}