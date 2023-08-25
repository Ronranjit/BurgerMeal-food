import React from 'react'

const CartItem = ({product}) => {
   
  return (
    <>
     <div className='flex justify-between p-1 '>
        <p>{product.productName}</p>
        <p>{product.price}</p>
    </div>
   
    </>
   
  )
}

export default CartItem