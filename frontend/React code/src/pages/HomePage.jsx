import React from 'react'
import Hero from '../components/Hero'
import ProductListings from '../components/ProductListings'
import ViewAllProducts from '../components/ViewAllProducts'
import Search from '../components/Search'


const HomePage = () => {
  return (
    <div>
      <Hero title='Welcome To Product Page' subtitle='This is a good website'/>
      <ProductListings isHome={true}/>
      <ViewAllProducts />

    </div>
  )
}

export default HomePage