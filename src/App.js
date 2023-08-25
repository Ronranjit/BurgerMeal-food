import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Menu from "./components/Menu";
import { BurgerProvider } from "./context/BurgerContext";
import Footer from "./components/Footer";

function App() {
  const[cart,setCart] = useState([])

  const [ btnHide,setBtnHide] = useState(false)
  const onAdd = (item) =>{
    
   setCart([...cart,item])
   setBtnHide(true)
  }
  
  return (
    
 
   <>
   <BurgerProvider>
   <Header cart={cart} setCart={setCart} btnHide={btnHide}  />
    {/* <Menu/> */}
    <Items onAdd={onAdd}/>
    <Footer/>

   </BurgerProvider>
   
   </>
     
   
  );
}

export default App;
