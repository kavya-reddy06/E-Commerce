import React, { use } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'


const EditProduct = ({updateProductSubmit}) => {
    const product= useLoaderData();
    const {id}=useParams();

    const [name, setName] = useState(product.name)
  const [brand, setBrand] = useState(product.brand)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
  const [category, setCategory] = useState(product.category)
  const [stockQuantity, setStockQuantity] = useState(product.stockQuantity)
  const [image, setImage] = useState(product.image)
  const [releaseDate, setReleaseDate] = useState(product.releaseDate)
  const [productAvailable, setProductAvailable] = useState(product.productAvailable)
  const [rating, setRating] = useState(product.rating)


  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const updatedProduct={
        id,
      name,
      brand,
      description,
      price,
      category,
      stockQuantity,
      image,
      releaseDate,
      productAvailable,
      rating
    }
    console.log(updatedProduct);
    updateProductSubmit(updatedProduct);
    toast.success('Product updated successfully');
    return navigate(`/products/${id}`);
  }


  return (
    <section className='bg-emerald-100'>
      <div className='container max-w-2xl m-auto py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          
          <form onSubmit={submitForm}>
            <h2 className='text-3xl font-semibold text-center mb-6'>Update Product</h2>
            <div className='mb-4'>
              <div className='mb-4'>
              <label htmlFor="name" className='text-emerald-700 font-bold mb-2 block w-full'>Name: </label>
              <input type="text" id="name" name="name" className='border rounded-md py-2 px-3 mb-2 mr-8 block w-full' placeholder='Enter Product Name' required  
              value={name} 
              onChange={(e)=>setName(e.target.value)}/>
              </div>
              <div className='mb-4'>
              <label className='text-emerald-700 font-bold mb-2 block w-full' htmlFor="brand">Brand: </label>
              <input className='border rounded-md py-2 px-3 mr-8 block w-full' type="text" name="brand" id="brand" placeholder="Enter Brand Name"
              value={brand} 
              onChange={(e)=>setBrand(e.target.value)}/>
              </div>
              <div className='mb-4'>
              <label className='text-emerald-700 font-bold block w-full mb-2' htmlFor="description" placeholder="Enter Description">Description:</label>
              <textarea name="description" id="description" className='border rounded w-100 py-2 px-3 block w-full' rows="4" placeholder='Enter Description'value={description}
              onChange={(e)=>setDescription(e.target.value)}></textarea>
              
              </div>
              <div className='mb-4'>
                <label htmlFor="price" className='text-emerald-700 font-bold block w-full mb-2'>Price:</label>
                <input type="number" name="price" id="price" className='block w-full py-2 px-3 border rounded-md' placeholder='Enter Price'
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label htmlFor="category" className='text-emerald-700 font-bold block w-full mb-2'>Category:</label>
                <select name="category" id="category" className='border rounded-md block w-full py-2 px-3'value={category} 
                onChange={(e)=>setCategory(e.target.value)}>
                  <option value="electronics" >Electronics</option>
                  <option value="fashion" selected>Fashion</option>
                  <option value="books" >Books</option>
                  <option value="medical" >Medical</option>
                </select>
              </div>
              <div className='mb-4'>
                <label htmlFor="stock-quantity" className='text-emerald-700 font-bold mb-2 block w-full'>Stock Quantity:</label>
                <input type="text" className='border rounded-md w-full py-2 px-3 block w-full' 
                value={stockQuantity} 
                onChange={(e)=>setStockQuantity(e.target.value)}/>
              </div>
              <div className='mb-4'>
                <label htmlFor="image" className='text-emerald-700 font-bold block w-full mb-2 '>Image:</label>
                <input type="text" name="image" id="image" className='border rounded-md w-full block py-2 px-3 ' placeholder='Paste image URL' value={image} onChange={(e)=>setImage(e.target.value)}/>
              </div>
              <div className='mb-4'>
                <label htmlFor="release-date" className='text-emerald-700 font-bold block w-full mb-2'>Release Date:</label>
                <input type="date" name="release-date" id="release-date" className='border rounded-md w-full block py-2 px-3 'value={releaseDate} 
                onChange={(e)=>setReleaseDate(e.target.value)}/>
              </div>
              <div className='mb-4'>
                <input type="checkbox" name="image" id="image" className='border rounded-md py-2 px-3' value={productAvailable} 
                onChange={(e)=>setProductAvailable(e.target.value)}/>
                <label htmlFor="product-available" className='text-emerald-700 font-bold mb-2 px-1'>Product Available</label>
              </div>
              <div className='mb-4'>
                <label htmlFor="rating" className='text-emerald-700 font-bold block w-full mb-2 '>Rating:</label>
                <input type="number" min="1" max="5" step="1" name="rating" id="rating" className='border rounded-md w-full block py-2 px-3 'value={rating} 
                onChange={(e)=>setRating(e.target.value)}/>
              </div>
              <div className='mb-4'>
                <button type="submit" className='bg-emerald-700 block w-full text-white rounded-md hover:bg-emerald-900 py-2 text-xl font-semibold' onClick={submitForm}>Update Product</button>
              </div>
            </div>
            
          </form>
        </div>
      </div>

    </section>
  )
}

export default EditProduct