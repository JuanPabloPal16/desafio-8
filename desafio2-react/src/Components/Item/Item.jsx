import { Card, Button,  } from "react-bootstrap"
import { Link } from "react-router-dom"
const Item =({producto})=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.foto} />
            <Card.Body >
                <Card.Title>{producto.Nombre}</Card.Title>
                <Card.Text>
                {producto.Descripcion}
                </Card.Text>
                <Card.Text>
                    {producto.Precio}
                </Card.Text>
                <Link to= {`/detalle/${producto.id}`}>
                    <Button variant="primary">Comprar</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default Item