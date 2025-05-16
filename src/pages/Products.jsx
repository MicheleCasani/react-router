import React from 'react'
import ManiNavbar from '../components/ManiNavbar'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Products() {

    const [products, setProducts] = useState(null);

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
                    {products === null ? (
                        <div className="col-12 justify-content-center text-center">
                            <p>Loading...</p>
                        </div>
                    ) : (
                        products.map((product, index) => (
                            <div className="col-12 col-md-6 col-lg-3 d-flex" key={index}>
                                <Link to={`/products/${product.id}`} className=''>
                                    <div className="card flex-fill my-3">
                                        <div className="card-img-top">
                                            <img src={product.image} className="img-fluid" alt={product.title} />
                                        </div>
                                        <div className="card-body">
                                            <h3>{product.title}</h3>
                                            <p>{product.price} €</p>
                                            <p>{product.description}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    )}

                </div>
            </div>

        </>
    )
}

export default Products
