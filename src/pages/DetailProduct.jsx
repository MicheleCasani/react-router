import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ManiNavbar from '../components/ManiNavbar'




function DetailProduct() {

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    const navigate = useNavigate();

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

    useEffect(() => {
        getProduct();
    }, [id])



    return (
        <div>
            <div className="container">
                <ManiNavbar />
                <div className="row">
                    <div className="col-12 justify-content-center text-center my-5">
                        <h1>Dettaglio Prodotto</h1>
                    </div>
                </div>
                <div className="row  justify-content-center mt-5">
                    <div className="col-12 col-md-6 col-lg-3   text-center">
                        < div className="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{product.price} €</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-12 justify-content-center text-center my-5 ">
                        <button
                            className='btn btn-secondary mx-2'
                            onClick={() => {
                                navigate(`/products/${parseInt(id) - 1}`)
                            }}
                            disabled={id <= 1}>
                            Indietro
                        </button>

                        <button
                            className='btn btn-secondary mx-2'
                            onClick={() => {
                                navigate(`/products/${parseInt(id) + 1}`)
                            }}>
                            Avanti
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DetailProduct
