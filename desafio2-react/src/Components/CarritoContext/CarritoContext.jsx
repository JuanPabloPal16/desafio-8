
import { createContext, useState } from "react"

export const CartContext = createContext ([]);

const CartContextProvider = ({children}) => {

  const [carList, setCarList] = useState([]);

  const AddToCard = (producto, cant) =>{
    if (IsInCart(producto.id)) {
      alert("ESTE PRODUCTO ESTA YA FUE AGRGADO AL CARRITO")
    }
    else{
      setCarList([...carList, {producto,cant}])
      alert("SE AGREGO AL CARRITO")
    }

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