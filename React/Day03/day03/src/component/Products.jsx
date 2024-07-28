import React from 'react'

export function Products( props ) {

    let { products } = props

    return (
        <div className='container mt-5 '>
            <div className="row">
                {products.map( ( product, index ) => {
                    return (
                        <div key={index} className='col-sm-6 col-md-4'>
                            <div className="card">
                                <div className="card-body">
                                    <h3>Product Name : {product.productName}</h3>
                                    <p className='lead fs-3'>Price : {product.productPrice}</p>
                                    {console.log( product.freeShipping )}
                                    <p className='lead fs-3'>Free Shipping : {product.freeShipping ? <span className='badge  text-bg-secondary'>Free Shipping</span> : <span className='badge  text-bg-danger'>Offer cancelled</span>}</p>
                                </div>
                            </div>
                        </div>
                    )
                } )}


            </div>
        </div>
    )
}
