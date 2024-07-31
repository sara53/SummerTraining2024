import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Products() {
    let [ products, setProducts ] = useState( [] )


    let getAllProducts = async () => {
        try {
            let response = await axios.get( "http://localhost:3005/products" )
            setProducts( response.data )
        } catch ( error ) {
            console.log( error )
        }
    }
    useEffect( () => {

        getAllProducts()


    }, [] )

    let deleteProduct = ( productId ) => {
        axios.delete( `http://localhost:3005/products/${productId}` ).then( ( response ) => {
            let filteredList = products.filter( product => product.id != productId )
            setProducts( filteredList )
        } )
    }
    return (
        <div className='products p-5 m-3'>
            <div className="container">
                <div className="product-header d-flex justify-content-around align-items-center">
                    <h1 className='text-center text-muted'>Our Products</h1>
                    <Link to="/products/0/edit">
                        <i className="fs-1 text-primary bi bi-plus-square-fill"></i>
                    </Link>
                </div>
                <Table striped bordered hover className='mt-5'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map( ( product, index ) => {
                            return <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <Link to={`/products/${product.id}/edit`}><i className="mx-1 fs-3 text-info bi bi-pencil-square"></i></Link>
                                    <Link to={`/products/${product.id}`}> <i className="mx-1 fs-3 text-warning bi bi-eye-fill"></i></Link>
                                    <i onClick={() => deleteProduct( product.id )} className="mx-1 fs-3 text-danger bi bi-trash-fill"></i>
                                </td>
                            </tr>
                        } )}



                    </tbody>
                </Table>
            </div>

        </div>
    )
}
