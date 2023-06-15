import React, { useState, useEffect } from 'react';

export default function Product() {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9000/products')
        .then(
            res => res.json())
        .then(
            result => {
                setProducts(result)
                // console.log(result)
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
            <div className="grid grid-cols-1 gap-4 p-6 lg:grid-cols-4 sm:grid-cols-2">
                {Products.map(p => (
                    <div className="card">
                        <img src={p.image} className="w-auto h-5/6"/>
                        <p className="text-left font-bold ml-1 mt-2"> Name: {p.name} </p>
                        <p className="text-left font-bold ml-1"> Price: {p.price.toLocaleString()} Baht</p>
                    </div>
                ))}
            </div >
        </>
    );
}