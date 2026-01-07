import React, { useEffect, useState } from 'react';
import ProductListing from './ProductListing';

const ProductListings = ({ isHome, productsFromSearch }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    if (Array.isArray(productsFromSearch)) {
      setProducts(productsFromSearch);
      return;
    }

    const fetchProducts = async () => {
      const apiUrl = isHome
        ? `http://localhost:8080/products?_limit=2`
        : `http://localhost:8080/products`;

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProducts(data.content);
      } catch (error) {
        console.log("Error getting products", error);
      }
    };

    fetchProducts();
  }, [isHome, productsFromSearch]); 

  return (
    <section className='p-6 bg-emerald-100'>
      <div className='p-4 text-center'>
        <h1 className='text-3xl font-semibold text-emerald-600'>
          {isHome ? 'Recent Products' : 'All Products'}
        </h1>
      </div>

      <div className='container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {products.map((product) => (
            <ProductListing
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListings;
