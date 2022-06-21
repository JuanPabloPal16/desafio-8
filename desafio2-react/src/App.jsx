import './App.css';
//
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//IMPORT DEL NAV
import Cuerpo from './Components/Cuerpo/Cuerpo';
//ESTILOS DEL NAV CON BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//IMPORT DEL SALUDO EN EL MAIN
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
//IMPORT DE BOTON
import  ItemCount from './Components/VistaContador/VistaContador.jsx';
//IMPORT DE API

//IMPORT DE CARRITO
import Cart from './Components/Cart/Cart';
//import { Form } from 'react-bootstrap';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';



function App() {
  
  return (
    <BrowserRouter>
        <Cuerpo/>
        <Routes>
          <Route path = "/" element = {<ItemListContainer saludo='Bienvenido a la pagina wed' />}/>
          <Route path = "/categoria/:categoriaId" element = {<ItemListContainer saludo='Bienvenido a la pagina wed' />}/>
          <Route path = "/detalle/:id" element = {<ItemDetailContainer/>}/>
          <Route path = "/cart" element = {<Cart/>}/>   
        </Routes>
    </BrowserRouter>

  );
}

export default App
