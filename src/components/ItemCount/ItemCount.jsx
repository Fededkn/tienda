import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

const ItemCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial)

    let incrementar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    let decrementar = () => {

        if(count >0){
            setCount(count-1)
        }
    }
    
    return (
        <div>
            <div>
                <Button onClick={decrementar}>-</Button>
                <span>{count}</span>
                <Button onClick={incrementar}>+</Button>
            </div>
            <Button disabled={count === 0} onClick={()=>onAdd(count)}>Comprar</Button>
        </div>
    )
}

export default ItemCount





