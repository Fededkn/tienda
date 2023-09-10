import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemListContainer = ({ productsData }) => {

    return (
        <div>
            {
            productsData.map((item) => (
                <Card style={{ width: '18rem' }} key={item.id}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Link to={`/item/${item.id}`}>Go somewhere</Link>
                    </Card.Body>
                </Card>
            ))
            }
        </div>
    );
};

export default ItemListContainer;
