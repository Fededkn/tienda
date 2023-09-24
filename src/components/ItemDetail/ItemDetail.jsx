import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({producto}) => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} productos`)
    }
    return(
        <div>
            <h3>Detalle de: {producto.name}</h3>
            <p>{producto.description} </p>
            <p>{producto.price}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail