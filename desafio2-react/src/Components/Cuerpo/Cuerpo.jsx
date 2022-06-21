//IMPRT DE LAS ETIQUETAS DEL BOOTSTRAP
import { Navbar, Container, Nav,} from "react-bootstrap"
//IMPORT DEL LOGO DEL CARRITO
import cart from '../../asset/img/cart.jpeg'
//IMPORT DE CSS
import '../../Components/estilo/estilo.css'

import { NavLink } from "react-router-dom"


export default function Cuerpo(){
 //const {parametro} = props
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <img className="carrito" src={cart}/>
          <Container>
          <Navbar.Brand href="/">LASLOCAS.IND</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">INICIO</Nav.Link>
            <NavLink to = "/categoria/Jean">JEAN</NavLink>
            <NavLink to = "/categoria/Short">SHORT</NavLink>
          </Nav>
          </Container>
        </Navbar>
      </>
      )
}