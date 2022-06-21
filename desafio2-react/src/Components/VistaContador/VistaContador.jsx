import React, {useState} from "react"
import '../estilo/estilo.css'

export default function ItemCount({stock, initial , onAdd}){
    const [count, setCount] = useState(1)
    
    const suma = () => {
        count == stock ? alert('NO PUEDES AGREGAR MAS PRENDAS') : setCount (count + 1)
    } 

    const resta= () => {
        count == initial ? alert('NO TIENES NINGUN PRODUCTO AGREGADO') : setCount (count - 1)
    };

    const agregar = () => {
        onAdd(count)

    }

    
        
    return(
        <>
        <div>
            <h2 className="tituloPrenda">PRENDA EN EL CARRITO</h2>
            <h3 className="numeroPrenda">{count}</h3>
            <button className="botonResta" onClick={resta}>-</button>
            <button className="botonSuma" onClick={suma}>+</button>
            
        </div>
        <div>
        <button className="agregarCarrito" onClick={agregar}>AGREGAR AL CARRITO</button>
        </div>
        </>
       
    )}