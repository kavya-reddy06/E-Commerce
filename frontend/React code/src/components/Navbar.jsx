import React from 'react'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const linkClass = ({isActive}) => isActive? 'bg-emerald-900 text-white hover:bg-emerald-900 hover:text-white rounded-md px-3 py-2' :
                                              'text-white hover:bg-emerald-900 hover:text-white rounded-md px-3 py-2';     
  return (
    <nav className='bg-emerald-600  '>
      <div className='p-4 border-b-4 border-emerald-900'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-white text-3xl font-bold '>E-Commerce</h1>
          </div>
          <div className='md:ml-auto'>
            <div className='flex space-x-6'>
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/add-product" className={linkClass}>Add Product</NavLink>
              <NavLink to="/cart" className={linkClass}>Cart</NavLink>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
          </div>
        </div>

        
      </div>

    </nav>
    
  )
}

export default Navbar