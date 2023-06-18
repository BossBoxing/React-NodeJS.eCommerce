import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate , useParams } from 'react-router-dom';

var methodAction = false;

const AddProduct = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: 0,
        image: ''
    })

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            console.log('Edit Product!')
            getProduct();
            methodAction = true;
        }
        else {
            console.log('Add Product!')
            methodAction = false;
        }
    }, [])

    const getProduct = () => {
        try {
            console.log(id)
            const res = fetch(`http://localhost:9000/products/${id}`)
                .then((response) => {
                    console.log(response.json().then(
                        (product) => {
                            setProduct(product[0])
                        }
                    ))
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleInput = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        console.log(methodAction)
        if (methodAction === false) {
            event.preventDefault()
            console.log(product)
            console.log('POST METHOD')
            axios.post('http://localhost:9000/products', product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            navigate('/product')
            alert('Add Successfully')
        }
        else{
            event.preventDefault()
            console.log(product)
            console.log('PUT METHOD')
            axios.put('http://localhost:9000/products/update', product)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            navigate('/product')
            alert('Edit Successfully')
        }

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
                            value={product.name}
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
                            value={product.category}
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
                            value={product.price}
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
                            value={product.image}
                            placeholder="image-url" />
                        <br />
                        <br />
                        <button type="submit" className="bg-white rounded hover:bg-slate-800">
                            {methodAction === false ? 'Add Product' : 'Edit Product'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddProduct;