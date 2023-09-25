import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap'
import { CartContext } from '../../CartContext/CartContext';

const ItemCount = ({ stock, onAdd }) => {

    const [count, setCount] = useState(0);

    const { cartItems, setCartItems } = useContext(CartContext);

    const handleAddProduct = () => {
        if(count < stock){
            setCartItems(cartItems + 1);
            setCount(count + 1);
        }
    };


    const handleRemoveProduct = () => {
        if(count > 0){
            setCartItems(cartItems - 1)
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div>
                <Button onClick={handleRemoveProduct}>-</Button>
                <label>{count}</label>
                <Button onClick={handleAddProduct}>+</Button>
            </div>
            <Button disabled={count === 0} onClick={() => onAdd(count)}>Comprar</Button>
        </div>
    );
}

export default ItemCount;