//IMPORT DE LOS ESTILOS
import '../estilo/estilo.css'

import { useEffect, useState, useContext } from 'react'

import { getFetch } from '../../helpers/getFetch'

import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'

import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from 'firebase/firestore'




export default function ItemListContainer({saludo}){
    //useState de firebase
    const [productos, setProductos]= useState([])
    //useState de cargando
    const [loading, setLoading] = useState(true)
    const {categoriaId}= useParams()
    console.log(categoriaId)
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db, 'Productos')
        getDocs(queryCollection)
        .then( data => setProductos( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )        
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    },[])
    
      console.log(productos)
    
   
   
   
   
      /* useEffect(()=>{
        if (categoriaId) {
            
            getFetch()
            .then((resp)=>{
                setProductos(resp.filter(producto => producto.categoria === categoriaId ))
                
            })
            .catch(err => console.log(err))
            
        } 
        
        else {
            
            getFetch()
            .then((res)=>{
                setProductos(res)
                
            })
            .catch(err => console.log(err))
        }

    })
    console.log(productos)*/
    
    
    
    return(
        <div>
            { loading ?
                <h1> cargando</h1>
                :

                
            <>
            <h1 className='titulo'>{saludo}</h1>

            <div className='divCars'>
                <ItemList productos={productos}/>
            </div>
            </>
            }
        </div>
    )
}