//IMPORT DE LOS ESTILOS
import '../estilo/estilo.css'
import { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/getFetch'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export default function ItemListContainer({saludo}){
    const [productos, setProductos]= useState([])
    

    const {categoriaId}= useParams()

    console.log(categoriaId)
    
    useEffect(()=>{
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
    console.log(productos)
    
    
    
    return(
        <>
        <h1 className='titulo'>{saludo}</h1>

        <div className='divCars'>
            <ItemList productos={productos}/>
        </div>
        
        
        </>
    )
}