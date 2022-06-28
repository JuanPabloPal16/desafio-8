//ITEMS DEL CARRITO
import {useContext} from 'react'
import { CartContext } from '../CarritoContext/CarritoContext'
const CartItems = ({item}) => {
  
  const {titulo, precio, id}= item
   const {DelItem} = useContext(CartContext)
    return (
    <div><h1>{titulo}</h1>
        <button onClick={()=> DelItem(id)}>borrar producto</button>
    </div>
  )
}

export default CartItems