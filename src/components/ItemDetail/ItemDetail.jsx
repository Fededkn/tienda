import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ producto }) => {

    const [stock, setStock] = React.useState(10);

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} productos`)
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Detalle de: {producto.name}</Card.Title>
                    <Card.Text>{producto.description}</Card.Text>
                    <Card.Text>{producto.price}</Card.Text>
                </Card.Body>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
            { stock >= 5 ? <strong>Stock disponible!</strong> : <strong>Últimas unidades disponibles!</strong> }
            <Button onClick={() => setStock(stock - 1)}>Agregar</Button>
            </Card>
        </div>

    )
}

export default ItemDetail