import { createContext,useState } from "react";

const BurgerContext = createContext() ; 

export const BurgerProvider = ({children}) =>{
    
     const [items,setItem] = useState([
        {
            id:1,
            img:"https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1c2hpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" ,
            productName:'sushi',
            price:109.99,
            description:"finest fish and fine vegies"
        },
        {
            id:2,
            img:"https://media.istockphoto.com/id/1424489174/photo/idly-sambar-or-idli-with-sambhar-and-green-red-chutney-popular-south-indian-breakfast.jpg?s=612x612&w=0&k=20&c=ttthhsPnjSnct6CRmVUn3kzHJIbYF2XTWNADMUaktHo=",
            productName:'idli',
            price:25,
            description:"finest fish and fine vegies"
        },
        {
            id:3,
            img:"https://images.unsplash.com/photo-1644289450169-bc58aa16bacb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9zYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            productName:'dosa',
            price:30,
            description:"finest fish and fine vegies"
        },
        {
            id:4,
            img:"https://media.istockphoto.com/id/979043242/photo/chatpate-masala-aloo-sabzi-fry-or-bombay-potatoes-served-with-fried-puri-or-indian-bread-made.jpg?s=612x612&w=0&k=20&c=fZQdwAD8MrnUehUd2ELUzIc0jeH3FZzN_DyKrOFPBYs=",
            productName:'puri',
            price:30,
            description:"finest fish and fine vegies"
        },
        {
            id:5,
            img:"https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvbmdhbCUyMGRpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            productName:'pongal',
            price:40,
            description:"finest fish and fine vegies"
        },
        {
            id:6,
            img:"https://images.unsplash.com/photo-1512058556646-c4da40fba323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGVtb24lMjByaWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            productName:'Lemon Rice',
            price:35,
            description:"finest fish and fine vegies"
        },

     ])

   

    return <BurgerContext.Provider value={{
        items,
    }}>
        {children}
    </BurgerContext.Provider>
}

export default BurgerContext