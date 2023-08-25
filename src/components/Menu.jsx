import React from 'react'
import meal from "../image/burger-restaurant-instagram-posts_23-2148967196.avif"
const Menu = () => {
  return (

    <>
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

export default Menu