import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export function ProductDetails() {

    let { id } = useParams();

    let [ product, setProduct ] = useState( {} )

    useEffect( () => {
        axios.get( `http://localhost:3005/products/${id}` ).then( ( response ) => {
            setProduct( response.data )
        } ).catch( ( error ) => {
            console.log( error )
        } )
    }, [] )
    return (
        <div className='bg-dark p-5  text-light'>
            <div className="container">
                <h1 className='text-warning'>Product Details</h1>
                <p className='lead mt-2'>Product Id : {id} </p>
                <p className='lead mt-2'>Product Name : {product.name} </p>
                <p className='lead mt-2'>Product Price : {product.price} </p>
                <p className='lead mt-2'>Product Quantity : {product.quantity} </p>
                <p className='lead mt-2'>
                    <i className="text-warning bi bi-star-fill"></i>
                    <i className="text-warning bi bi-star-fill"></i>
                    <i className="text-warning bi bi-star-fill"></i>
                    <i className="text-warning bi bi-star-fill"></i>
                    <i className="text-warning bi bi-star-fill"></i>
                </p>
                <Link className='btn btn-danger mt-3' to='/products'>Back To Products</Link>
            </div>
        </div>
    )
}
