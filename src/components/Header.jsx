import React, { useState } from 'react'
import {FaCartPlus,FaCartArrowDown} from "react-icons/fa"
import CartItem from './CartItem';
import meal from "../image/burger-restaurant-instagram-posts_23-2148967196.avif"

const Header = ({cart,btnHide,setCart}) => {
    console.log(cart)
   const [showCart,setShowCart] = useState(false);

   
   const onCartClick = () =>{
    
     setShowCart(true)
     
   }

   const onClose = () =>{
    setCart([])
    setShowCart(false)
    
  }

  
  return (
    <>
   

    <header className=' relavite  flex justify-between bg-rose-700 text-white items-center p-4'>
        <h1 className='text-2xl capitalize'>Burger meals</h1>

        <div className=' '>
          {showCart && <>
          <div className='absolute inset-x-15  bottom-19   w-1/2  p-8 item-center rounded-2xl  bg-white text-black  '>
            {cart.map((product)=>{
                return <CartItem key={product.id} product={product} onClose={onClose}/>
            })}
            <div className=' text-center'>
            <button 
            onClick={onClose}
            className='btn-sm w-full hover:bg-rose-700 hover:text-white rounded-lg'>close</button>
            </div>
           
           
          </div>
          </>}

          </div>
        
        <div className='flex gap-3'>
          
         
          {btnHide && <>
            <div className='flex  gap-3  p-2 align-middle  items-center border-2 rounded-2xl bg-white text-black border-none px-3 hover:bg-yellow-300 hover:text-white cursor-pointer'>
            <FaCartArrowDown className='align-middle'/>
        <button 
        className='text-1xl'>buy now</button>
        </div>
          </>}
       
        <div 
        className='flex  gap-3  p-2 align-middle  items-center border-2 rounded-2xl bg-white text-black border-none px-3 hover:bg-yellow-300 hover:text-white cursor-pointer'>
            <FaCartPlus className='align-middle'/>
        <button 
        onClick={()=>onCartClick(cart)}
        className='text-1xl'>Your Cart</button>
        </div>

          
        </div>
       
    
        
    </header>
    <div className='static ' >
       <img  src={meal} width={7000} alt=" "/>
    </div>
    <div className=' bg-rose-700 text-white text-center p-4 w-2/4  mx-auto relative bottom-11 rounded-lg'>
         <h2 className='mb-4 text-2xl'>Delicios Food, Delivered To You</h2>
         <p className='mb-4'>Choose your favorite meal from our broad selection of available meals and enjoy a delicious
lunch or dinner at home</p>
          <p>
          All our meals are cooked with high quality ingredients, just in-time and of course by
experienced chefs!
          </p>
    </div>
    </>
    

  )
}
export default Header