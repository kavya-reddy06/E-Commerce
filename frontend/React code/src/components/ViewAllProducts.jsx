import React from 'react'
import {Link} from 'react-router-dom'

const ViewAllProducts = () => {
  return (
    <section className='max-w-full bg-black rounded-lg mx-30 md:mx-100 my-10 py-2'>
        <div className='text-white h-10 text-center py-2 '>
            <Link to="/products">View All Products</Link>
        </div>
    </section>
  )
}

export default ViewAllProducts