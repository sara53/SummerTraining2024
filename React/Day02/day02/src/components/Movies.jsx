import React from 'react'
import { MovieCard } from './MovieCard'
import { Outlet } from 'react-router-dom'

export default function Movies( props ) {
    let { moviesList } = props

    return (
        <div className='bg-dark p-5 text-center text-light'>
            <div className="container">
                <h1 className='text-warning mb-5'>Movies List</h1>
                <div className="row mt-5">
                    {
                        moviesList.map( ( movie ) => <MovieCard movie={movie} /> )
                    }

                </div>
                <Outlet />
            </div>
        </div>
    )
}
