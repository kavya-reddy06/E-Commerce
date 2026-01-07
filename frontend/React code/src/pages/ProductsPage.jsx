import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductListings from "../components/ProductListings";

const ProductsPage = () => {
  const { searchResults, searchTerm } = useOutletContext();

  // 🔑 MISSING PIECE: store all products
  const [allProducts, setAllProducts] = useState([]);

  // 🔑 MISSING PIECE: fetch all products once
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data => setAllProducts(data.content || []))
      .catch(err => console.error(err));
  }, []);

  const displayProducts =
  searchTerm && searchTerm.trim() !== ""
    ? searchResults
    : allProducts;

  return (
    <div className="mt-6 px-4">
      <ProductListings productsFromSearch={displayProducts} />
    </div>
  );
};

export default ProductsPage;
