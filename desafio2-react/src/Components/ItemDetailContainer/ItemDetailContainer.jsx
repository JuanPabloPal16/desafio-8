import { getFetch1 } from "../../helpers/getFetch"
import { useEffect } from "react"
import { useState } from "react"
import ItemDetail from "../ItemDatail/ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [producto, setproducto]=useState({})
    const [loading, setLoading] = useState(true)


    const {id} = useParams ()

    useEffect(() => {
      const db = getFirestore()
      const queryItems = doc(db, 'Productos',id)
      getDoc (queryItems)
      .then (resp => setproducto({id:resp.id,...resp.data()}))
      .catch (err => console.log(err))
      .finally(() => setLoading(false))

    },[id])
    console.log(producto)
    
  
  
  
  return <ItemDetail producto ={producto}/>
    
    
}

export default ItemDetailContainer