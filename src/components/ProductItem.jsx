import React from 'react'

const ProductItem = ({item,onAdd}) => {
      
  return (
    <div>
        
     <div 
    id='item1'
    className="md:flex bg-gradient-to-r from-amber-200 to-yellow-500  rounded-xl p-8 md:p-0 w-2/4 mx-auto justify-between mb-7    ">
        <div>
            <img className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto' src={item.img} alt="" />
        </div>
    <div className='p-9'>
    <a href="#">
        <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.productName}</h5>
    </a>
    <p className="mb-3 font-medium text-gray-700 dark:text-gray-700 ">${item.price}</p>
    <p className="mb-3 italic text-2xl capitalize font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
    <a href="#" 
    onClick={()=>onAdd(item)}
    className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-blue-800  ">
       Add
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
        </div>
    </div>
  )
}

export default ProductItem