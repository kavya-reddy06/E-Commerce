import React,{useState} from 'react'
import Search from './Search'
import ProductListing from './ProductListing';
import { useEffect } from 'react';
import { useDebounce } from 'use-debounce';


const Hero = ({title, subtitle}) => {





  return (
    <section className='bg-emerald-500 py-20'>
        <div className='flex flex-col items-center p-15'>
            <div className='text-center space-y-4'> 
                <h1 className='text-white font-bold text-4xl'>{title}</h1>
                <p className='text-white text-2xl'>{subtitle}</p>
                
            </div>

        </div>

    </section>
  )
}

export default Hero