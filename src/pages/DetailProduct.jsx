import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'




function DetailProduct() {

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    const getProduct = () => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <div>
            <h1>Dettaglio Prodotto</h1>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card flex-fill my-3">
                            <div className="card-img-top">
                                <img className='img-fluid' src={product.image} alt="" />
                            </div>
                            <div className="card-body">
                                <h1>{product.title}</h1>
                                <span>
                                    <em>{product.price}€</em>
                                </span>
                                <span>
                                    <strong>{product.category}</strong>
                                </span>
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct
