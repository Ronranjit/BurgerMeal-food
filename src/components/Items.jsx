import React from 'react'
import { useContext } from 'react'
import BurgerContext from '../context/BurgerContext'
import ProductItem from './ProductItem'
const Items = ({onAdd}) => {

  const {items} = useContext(BurgerContext)


    
   
  return (
    <>

     {items.map((item)=>{
        
        return <ProductItem key={item.id} item={item} onAdd={onAdd}/>
         
     })}



    </>



  )
}

export default Items