import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Shared() {
    return (
        <div>
            <nav className='bg-dark p-4 text-center text-light'>
                <NavLink className={( { isActive } ) => isActive ? 'bg-danger nav-link' : 'nav-link'} to='/' >Home</NavLink>
                <NavLink className={( { isActive } ) => isActive ? 'bg-danger nav-link' : 'nav-link'} to='/products' >Movies</NavLink>
                <NavLink className={( { isActive } ) => isActive ? 'bg-danger nav-link' : 'nav-link'} to='/er' >NotFound</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}
