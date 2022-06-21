import { getFetch1 } from "../../helpers/getFetch"
import { useEffect } from "react"
import { useState } from "react"
import ItemDetail from "../ItemDatail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setproducto]=useState({})

    const {id} = useParams ()

  useEffect(() => {
    getFetch1()
    .then ((resp)=> setproducto(resp.find(producto => producto.id === id)))
    .catch (err => console.log(err))
  
  },[])
  
  
  
    return <ItemDetail producto ={producto}/>
    
    
}

export default ItemDetailContainer