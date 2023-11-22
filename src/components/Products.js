import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Products = () => {

  return (
    <>
        <div>
            <h3>Products</h3>
            <input type='search' placeholder='search products'></input>    
        </div>
    
        <nav>
            <Link to="featured">Featured</Link>{/*  make sure not to add "/" */}
            <div></div>
            <Link to="new">New</Link>{/*  make sure not to add "/" */}
        </nav>
        <Outlet/>
    </>
  )
}
