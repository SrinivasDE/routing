import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Products = () => {
  return (
    <>
    <center>
    <div >
        <input type="search" placeholder='Search Products' style={{fontSize:30}}/>
    </div>
    <nav>
        <Link to='featured-products'>Featured</Link>
        <Link to='new-products'>New</Link>
    </nav> 
    <Outlet/>
    </center>
    
    </>
  )
}

export default Products;