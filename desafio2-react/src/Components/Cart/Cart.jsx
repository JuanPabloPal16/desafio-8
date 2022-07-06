//CARRITO DE COMPRAS
import { useContext } from "react"
import { CartContext } from "../CarritoContext/CarritoContext"
import CartItems from "../CartItems/CartItems"

const Cart = () => {
  const {cartList, EmptyCart} = useContext(CartContext)
  
  
  
  return (
    <>
    <div>
      {cartList<1?(
      <h1>EL CARRITO ESTA VACIO</h1>)
      :
      (
        cartList.map((i)=><CartItems key={item.producto.id} item={i.producto}/>)
      )}
    </div>
    <button onClick={EmptyCart}>
        borrar carrito
    </button>
    </>
  )
}

export default Cart