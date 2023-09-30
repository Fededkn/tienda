import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css"

const CartWidget = () => {

    const {cartItems} = useContext(CartContext)

    return (
            <div className='cartContainer'>
            <span><FontAwesomeIcon icon={faShoppingCart} size="lg" /></span>
            <span>{cartItems}</span>
            </div>        
    );
};

export default CartWidget; 