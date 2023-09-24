import React from 'react'
import Item from '../Item/Item'

const ItemList = ({productos}) => {
    return (
        <div className='d-flex flex-wrap justify-content aling-items-center'>
            {productos.map((prod => <Item key={prod.id} prod={prod}/>))}
        </div>
    )
}

export default ItemList
