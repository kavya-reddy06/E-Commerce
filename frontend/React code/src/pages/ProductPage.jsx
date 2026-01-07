import React from 'react'
import ProductListing from '../components/ProductListing.jsx'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import StarRatings from '../components/StarRatings.jsx'
import {toast} from 'react-toastify'
import CartPage from './CartPage.jsx'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ClickToView from '../components/ClickToView.jsx'




const productLoader = async({params}) => {
  const res = await fetch(`http://localhost:8080/products/${params.id}`);
  const data = await res.json();
  return data
}

const ProductPage = ({deleteProduct}) => {

const addToCart = async (productId) => {
  await fetch(
    `http://localhost:8080/api/cart/add?productId=${productId}&userId=1`,
    { method: "POST" }
  );
  alert("Added to cart");
};


  const {id} = useParams();
  console.log(id);
  const product = useLoaderData();
  console.log(product);
  const navigate=useNavigate();
  





  const onDeleteClick= async(id)=>{
    const confirm=window.confirm('Are you sure to delete this product?');
    if(!confirm){
      return;
    }

    await deleteProduct(id);
    toast.success('Product deleted successfully');
    navigate('/products');
  }


  return (
    <div className='mt-5 mb-8'>
        <div className='uppercase grid grid-cols-3 md:grid-cols-6 gap-3 mb-4 text-gray-600 place-items-center '>
          <Link className='hover:text-blue-500 hover:underline'>Fashion</Link>
          <Link className='hover:text-blue-500 hover:underline'>Electronics</Link>
          <Link className='hover:text-blue-500 hover:underline'>Stationery</Link>
          <Link className='hover:text-blue-500 hover:underline'>Sports</Link>
          <Link className='hover:text-blue-500 hover:underline'>Beauty</Link>
          <Link className='hover:text-blue-500 hover:underline'>Grocery</Link>
        </div>
        <div className='flex justify-center border border-gray-300 p-3 font-semibold '>
          {product.productPraise}
        </div>
       <div className='flex'>
         <div className='w-[40%]'>
          <div className='sticky top-0'>
          <img src={product.image} alt={product.name} />
          {/* <Link className='text-blue-700 hover:underline font-semibold block text-center md:text-xl md:p-2'>Click here to view full image</Link> */}
          <ClickToView image={product.image} description={product.description} name={product.name} />
          </div>
        </div>
        <div className='w-[60%] p-4'>
          <div className='text-xl text-gray-500'>
            {product.name}
          </div>
          <div className='flex gap-6 items-end'>
          <div>
          <div className='md:text-justify font-semibold text-3xl'>
            {product.description}
          </div>
          <div className='p-3 font-semibold'>
            <StarRatings rating={product.rating}/>
            </div>
          </div>
          <div className='border border-gray-300 shadow-500 h-fit w-sm p-3 bg-gray-100 rounded-md mb-4'>
            
            <p className='flex justify-between'><span className='font-semibold'>Brand </span>{product.brand}</p>
            <p className='flex justify-between'><span className='font-semibold'>Year </span>{product.releaseDate.split('-')[0]}</p>
           
          </div>
          </div>
          <div className='text-3xl font-bold border b-4 border-gray-300 w-full p-2'>
            ₹{product.price}
          </div>
          <div>
            {product.stockQuantity>0 ? <span className='text-green-600 text-2xl'>In stock</span> : <span className='text-red-600 text-2xl'>Out of stock</span>}
          </div>
           <div>
              <button className='border px-5 py-2 bg-orange-500 rounded-3xl hover:bg-orange-400 block w-full mt-6' onClick={() => addToCart(product.id)}>Add to cart</button>
           </div>
           <div>
              <Link to={`/edit-product/${product.id}`} className='border px-5 py-2 bg-blue-600 rounded-3xl hover:bg-blue-500 flex justify-center w-full mt-6'>Edit Product</Link>
           </div>
           <div>
            <button className='border px-5 py-2 bg-red-500 rounded-3xl hover:bg-red-400 block w-full mt-6' onClick={()=>onDeleteClick(product.id)}>Delete Product</button>
           </div>
        </div>
       </div>
      </div>
  )
}

export {ProductPage as default , productLoader }