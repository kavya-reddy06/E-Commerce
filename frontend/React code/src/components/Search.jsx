import React, { useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import { useDebounce } from 'use-debounce'


const Search = () => {
  // useDebounce(() => {
  //   setDebouncedSearchTerm(debouncedSearchTerm)
  // })
  
  
  // const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  // const [isLoading, setIsLoading] = useState(false)

  // const fetchProducts = async(query='') => {
  //     try{
  //       const endpoint = query ? `/api/products?query=${encodeURIComponent(query)}` : "/api/products"
  //       const res = await fetch(endpoint)
  //       if(!res.ok) {
  //         throw new Error("Failed to fetch products")
  //       }
  //       const data = await res.json();
  //       console.log(data) 
  //       if(data.res == 'False') {
  //         setErrorMessage(data.error || 'No Products Found');
  //         setProdu
  //       }
  //       setDebouncedSearchTerm(debouncedSearchTerm)
  //       fetchProducts()
  //     }
  //     catch(error) {
  //       console.log("Error fetching products", error);
  //     }
  //     finally{
  //       setIsLoading(true)
  //     }
  //   }

  // useEffect = (() => {
    
  //   fetchProducts()
  // },[isLoading=false])

  return (
    <div>
      <div className='border flex flex-row gap-2 bg-white mb-20 rounded-3xl max-w-3xl' >
        <MdSearch className='m-4' color="black" size={32}/>
        <input type="text" className='flex-1 my-4 outline-none focus:outline-none' placeholder='Search Products'>

        </input>
        <div className='border bg-emerald-500 rounded-lg p-3 m-2 px-4'>
          <button>Search</button>
        </div>
      </div>
    </div>
    
  )
}

export default Search