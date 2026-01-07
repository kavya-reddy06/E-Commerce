import React from 'react'
import { useState } from 'react'

const ClickToView = ({image,description,name}) => {

const[isOpen,setIsOpen]=useState(false);


  return (
    <div>
        <div className='text-blue-700 hover:underline font-semibold block text-center md:text-xl md:p-2 cursor-pointer'>
        <p onClick={()=>setIsOpen(true)}>Click here to view full image</p>
        </div>


       {isOpen && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

    
    <div className="bg-white p-6 rounded-lg relative max-w-3xl w-[90%]">

      
       <button
        onClick={() => setIsOpen(false)}
        className="absolute top-3 right-4 text-xl font-bold cursor-pointer"
      >
        ✕
      </button>

      <img
        src={image}
        alt={name}
        className="mx-auto max-h-[80vh] object-contain"
      /> 

    </div>
  </div>
)}

    </div>
  )
}

export default ClickToView