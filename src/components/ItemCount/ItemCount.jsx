import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext';

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const { cartItems, setCartItems } = useContext(CartContext);

    const handleAddProduct = () => {
        setCartItems(cartItems + 1);
        setCount(count + 1);
    };

    const handleRemoveProduct = () => {
        if( count > 0){
            setCartItems(cartItems - 1)
            setCount(count - 1)
        }
    }

    return (
        <div>
            <Button onClick={handleRemoveProduct}>-</Button>
            <label>{count}</label>
            <Button onClick={handleAddProduct}>+</Button>
        </div>
    );
};

export default ItemCount;