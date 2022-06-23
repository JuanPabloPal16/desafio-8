import ItemCount from "../VistaContador/VistaContador"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import '../estilo/estilo.css'
import { CartContext } from "../CarritoContext/CarritoContext"



const ItemDetail = ({producto}) =>{
   const [estado, setEstado] = useState(null)
   
   const { AddToCard } = useContext (CartContext);

    const onAdd = (cant) => {
        AddToCard (producto,cant)
    }


    return (
        <>
        <div>
            <h2>{producto.Nombre}</h2>
            <h3>{producto.Descripcion}</h3>
            <h4>{producto.Precio}</h4>
        </div>
        <div>
            {estado ? 
            <Link to = './cart' > <button className="botonCarrito">CARARRITO</button></Link> 
            : 
            <ItemCount initial={1} stock={5} onAdd={onAdd}/> }
        </div>
        </>
    
      )
}

export default ItemDetail