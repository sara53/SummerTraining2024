import React from 'react'

export function Login( props ) {
    let { setShow } = props

    let logout = () => {
        setShow( false )
    }
    return (
        <div className='bg-dark p-5 text-center'>
            <h1 className='text-warning'>Welcome </h1>
            <button className='btn btn-danger mt-5' onClick={logout}>logout</button>
        </div>
    )
}
