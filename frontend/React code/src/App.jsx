import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AddProduct from './pages/AddProduct'
import CartPage from './pages/CartPage'
import ProductsPage from './pages/ProductsPage'
import ProductPage, { productLoader } from './pages/ProductPage'
import EditProduct from './pages/EditProduct'
import NotFoundPage from './pages/NotFoundPage'
import CategoryPage, {categoryLoader} from './pages/CategoryPage'


const App = () => {

  const endPoint='http://localhost:8080/products'

  const addProductSubmit =async(productData) => {
    const res=await fetch(`${endPoint}/add`,
      {method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
  }

  const updateProductSubmit= async(updatedProduct)=>{
    const res=await fetch(`${endPoint}/${updatedProduct.id}`,
      {method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
      }
    )
  }


  const deleteProduct= async(id)=>{
    const res=await fetch(`${endPoint}/${id}`,
      {
        method: 'DELETE'
      }
    )
    return;
  }


  const router = createBrowserRouter(
                    createRoutesFromElements(
                      <Route path='/' element={<MainLayout />}>
                        <Route index element = {<HomePage />}/>
                        <Route path='/add-product' element={<AddProduct addProductSubmit={addProductSubmit}/>}/>
                        <Route path='/cart' element={<CartPage />}/>
                        <Route path='/products' element={<ProductsPage />} />
                        <Route path='/products/:id' element={<ProductPage  deleteProduct={deleteProduct} />} loader={productLoader} />
                        <Route path='/edit-product/:id' element={<EditProduct updateProductSubmit={updateProductSubmit}/>} loader={productLoader} />
                        <Route path='/category/:category' element={<CategoryPage />} loader={categoryLoader}/>
                        <Route path='*' element={<NotFoundPage />}/>
                      </Route>
                    )
    )


  return (

    
    
    <RouterProvider router={router}/>

  )
}

export default App