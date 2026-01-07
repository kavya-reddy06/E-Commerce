import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom';

const ProductListing = ({product}) => {
  const [showFullDescription, setShowFullDescription] = useState(false)
  

  let description = product.description;

  if(!showFullDescription) {
    description = description.substring(0,30) + '...';
  }

  return (
    <section >
      <div className='bg-gray-100 p-8 border rounded-lg border-1 m-6 border-white shadow-lg'>
        <div className='flex'>
          <div className='w-[60%]'>
              {/* <div> */}
                <div className='uppercase text-gray-600 py-1'>
                  <h4>{product.category}</h4>
                </div>
                <div>
                  <h2 className='text-xl font-bold'>{product.name}</h2>
                </div>
                <div className='italic font-semibold text-[16px]'>
                  <p>{product.brand}</p>
                </div>
                <div className='py-4'>
                  {description}
                  <button className='text-emerald-600' onClick={ () => {setShowFullDescription(prevState => (!prevState))}}>
                    {showFullDescription ? 'Less': 'More'}
                  </button>
                </div>
                <div>
                  <p className='text-gray-600 text-[14px]'>{product.releaseDate}</p>
                </div>
              {/* </div> */}
            </div>
            <div className='w-[40%]'>
              <div>
                <img className='h-40 w-40 object-fill rounded' src={product.image}  alt="" />
              </div>
              <div>
                <h2 className='text-center text-2xl'>{`₹${product.price}`}</h2>
              </div>
            </div>
        </div>
        <div>
          <Link to={`/products/${product.id}`} className='text-white block w-full bg-emerald-700 rounded-md text-center p-2 mt-6'>Read More</Link>
        </div>
      </div>

    </section>
  )
}

export default ProductListing