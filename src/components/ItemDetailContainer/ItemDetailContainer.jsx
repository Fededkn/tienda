import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

import ItemCount from '../ItemCount/ItemCount'

const ItemDetailContainer = ({ productData }) => {
    const [stock, setStock] = React.useState(10);
    const [onAdd, setOnAdd] = React.useState(false);

    const buttonStyles = {
        backgroundColor: "blue",
    };

    const buttonStylesOnAdd = {
        backgroundColor: "green",
    };

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productData.thumbnail} />
            <Card.Body>
                <Card.Title>{productData.name}</Card.Title>
                <Card.Text>{productData.description}</Card.Text>
                <Card.Text>{productData.price}</Card.Text>
                <ItemCount />
                {stock >= 5 ? (
                    <strong>Stock disponible!</strong>
                ) : (
                    <strong>Últimas unidades disponibles!</strong>
                )}
            </Card.Body>
        </Card>
    );
};

export default ItemDetailContainer