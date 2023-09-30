import React from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount'
import "../../css/common.css"

const ItemDetailContainer = ({ productData }) => {
    const [stock, setStock] = React.useState(10);
    const [onAdd, setOnAdd] = React.useState(false);

    return (

        <div className='containerCommon'>
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
        </div>
    );
};

export default ItemDetailContainer