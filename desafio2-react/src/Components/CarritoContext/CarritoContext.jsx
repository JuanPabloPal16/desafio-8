//CONTEXT DEL CARRITO 
import { createContext, useState } from "react"

export const CartContext = createContext ([]);

const CartContextProvider = ({children}) => {

  const [carList, setCarList] = useState([]);

  const AddToCard = (producto) => {
    setCarList([
        ...carList,
        producto
    ])
}



  const DelItem = () => {
    const items = carList.filter((item) => item.producto.id !== id )
    setCarList(items)
    return
    
  }
  
  const EmptyCart = () => {
    return setCarList([])
  

  }
  const IsInCart = (id) => {
    return carList && carList.some((i)=> i.producto.id === id)
  


  }
  
  return (
    <CartContext.Provider value={{ AddToCard, carList, EmptyCart, DelItem }}>
      {children}
    </CartContext.Provider>
    
  )
}

export default CartContextProvider