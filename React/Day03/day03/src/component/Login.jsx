import React, { useEffect } from 'react'

export function Login() {

    // useEffect
    useEffect( () => {
        console.log( "Did Mount" )
        // cleanup function
        return () => {
            console.log( "Login  unMounted" )
        }
    }, [] )
    return (

        <div className='bg-dark p-5 text-center'>
            {console.log( "Render @ Login " )}
            <h1 className='text-warning'>Login Component</h1>

        </div>
    )
}
