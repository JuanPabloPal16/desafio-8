//ITEMS DEL CARRITO
import {useContext} from 'react'
import { CartContext } from '../CarritoContext/CarritoContext'
import {addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch} from "firebase/firestore"


const CartItems = ({item}) => {
  
  const {titulo, precio, id}= item
   const {DelItem} = useContext(CartContext)
    
   async function NuevaOrden(e){
    e.preventDeFault()
    let orden = {}

    orden.buyer ={nombre:'juan pablo', gmail:'juan@gmail.com', telefono:'112522544'}
    orden.total = precio()

    orden.producto = carList.map(cartItem => {
      const id = cartItem.id
      const nombre = cartItem.name
      const precio = cartItem.price * cartItem.cantidad

      return (id,nombre,precio)

    })

      const db = getFirestore()
      const ordenCollection = collection (db, 'ordenes')
      addDoc(ordenCollection, orden)
      .then(resp => console.log(resp.id))

      
      
      /*const updateCollection = doc (db, 'Productos', 'pgYWzzqLa9nP1cyNMizU')

      updateDoc(updateCollection, {
        stock:100
      })*/





    const queryCollectionStock = collection(db, 'Productos')

         const queryActulizarStock = query(
             queryCollectionStock,                 
             where( documentId() , 'in', cartList.map(it => it.id) )       
         )

         const batch = writeBatch(db)

          getDocs(queryActulizarStock)
         .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
               stock: res.data().stock - cartList.find(producto => producto.id === res.id).cantidad
         }) ))
         

         batch.commit()
    }

   
   
   
   
   
   return (
    <div><h1>{titulo}</h1>
        <button onClick={()=> DelItem(id)}>borrar producto</button>
        <button onClick={NuevaOrden}>TERMINAR LA COMPRA</button>
    </div>
  )
}


export default CartItems