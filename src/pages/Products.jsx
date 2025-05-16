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
                            <div className="col-12 col-md-6 col-lg-3 my-3" key={index}>
                                <Link to={`/products/${product.id}`} className='text-decoration-none'>
                                    < div className="card h-100 p-3 ">
                                        <img src={product.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text card-text-truncate">{product.description}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">{product.price} €</li>
                                        </ul>
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


