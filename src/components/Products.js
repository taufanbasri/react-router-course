import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder='Search products' />
      </div>

      <nav>
        <Link to={'featured'}>Featured</Link>
        <Link to={'new'}>New</Link>
      </nav>

      {/* Render the nested element */}
      <Outlet />
    </>
  )
}

export default Products