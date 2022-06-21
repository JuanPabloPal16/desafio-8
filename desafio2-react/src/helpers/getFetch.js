let productos = [{
    id: '1',
    categoria:'Short 1',
    foto: 'https://ibb.co/xGznR0B',
    Descripcion:'Short negro',
    Precio:'$1500',
},
{
    id: '2',
    categoria:'Short 2',
    Descripcion:'Short azul',
    Precio:'$2500',

},
{
    id: '3',
    categoria:'Jean 3',
    Descripcion:'jean nisse',
    Precio:'$1500',
},
{
    id: '4',
    categoria:'Jean 4',
    Descripcion:'Jean locas',
    Precio:'$2500',
},
{
    id: '5',
    categoria:'Short 5',
    Descripcion:'short las locas',
    Precio:'$1500',
}
];


export const getFetch =(id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(prod => prod.id === id))              
            } else {
                resolve(productos)          
            }
        },2000)
    })
}


let producto={
    id: '1',
    Nombre:'Jean 1',
    
    Img:"../../asset/img/jean2",
    Descripcion:'Short negro',
    Precio:'$1500',
}


export const getFetch1 =() =>{
    return new Promise((resolver,reject)=>{
        setTimeout(()=>{
            resolver(productos)
        },2000)
    })
}