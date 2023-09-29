import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const {cartItems} = useContext(CartContext)

    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
            <span>{cartItems}</span>
        </div>
    );
};

export default CartWidget; 