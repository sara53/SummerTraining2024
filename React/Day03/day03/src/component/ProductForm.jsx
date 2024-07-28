import React, { useEffect, useState } from 'react'
import { Products } from './Products'

export function ProductForm( props ) {

    let [ products, setProducts ] = useState( [] )
    let [ formValues, setFormValues ] = useState( {
        productName: '',
        productPrice: '',
        freeShipping: false
    } )
    let getValue = ( e ) => {
        if ( e.target.name == 'freeShipping' ) {
            setFormValues( {
                ...formValues,
                [ e.target.name ]: e.target.checked
            } )
        } else {
            setFormValues( {
                ...formValues,
                [ e.target.name ]: e.target.value
            } )
        }

    }

    useEffect( () => {
        console.log( products )
    }, [ products ] )

    let addProduct = () => {
        setProducts( [ ...products, formValues ] )
        setFormValues( {
            productName: '',
            productPrice: '',
            freeShipping: false
        } )
    }


    return (
        <div className='bg-dark text-light p-5'>
            <div className="container">
                <h1 className='text-warning'>Product Form</h1>
                <input
                    value={formValues.productName}
                    onInput={getValue}
                    name='productName' type="text"
                    placeholder='Enter Product Name'
                    className='form-control mt-4' />
                <input
                    onInput={getValue}
                    name='productPrice'
                    value={formValues.productPrice}
                    type="text"
                    placeholder='Enter Product Price'
                    className='form-control mt-4' />
                <label className='d-blok  mt-4 form-control'>
                    free Shipping
                    <input
                        name='freeShipping'
                        value={formValues.freeShipping}
                        onChange={getValue}
                        type="checkbox"
                        placeholder='Enter Product Price'
                        className='mt-4 d-block form-check' />

                </label>

                <button
                    onClick={addProduct}
                    className='btn btn-warning mt-4'
                >Add Product</button>

            </div>
            <Products products={products} />

        </div>
    )
}

