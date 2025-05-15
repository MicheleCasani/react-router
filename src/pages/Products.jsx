import React from 'react'
import ManiNavbar from '../components/ManiNavbar'
import { useState, useEffect } from 'react'
import axios from 'axios';


function Products() {

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((resp) => {
                setProducts(resp.data)
            })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>
            <div className="container">
                <ManiNavbar />
                <div className="row">
                    <div className="col-12 justify-content-center text-center my-5">
                        <h1>Prodotti</h1>
                    </div>
                </div>
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="col-12 col-md-6 col-lg-4 d-flex">
                                <div className="card flex-fill my-3">
                                    <div className="card-image-top">
                                        <img src={product.image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{product.title}</h3>
                                        <p>{product.price}</p>
                                        <p>{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Products
