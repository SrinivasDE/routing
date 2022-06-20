import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='primary-nav'>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/dashboard' >DashBoard</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/products' >Products</NavLink>

            
        </nav> 
    )
}

export default NavBar;