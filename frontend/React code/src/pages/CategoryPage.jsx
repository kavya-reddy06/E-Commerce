import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ProductListing from '../components/ProductListing';

const categoryLoader = async({params}) => {
    const res = await fetch(`/api/products?category=${params.category}`);
    const data = await res.json();
    return data;
  }


const CategoryPage = () => {
    const products = useLoaderData();
    console.log(products)
    
    return (
        <div>
            {products.map((product) => 
                <ProductListing key={product.id} product={product}/>
            )}
        </div>
    )
}

export {CategoryPage as default, categoryLoader}