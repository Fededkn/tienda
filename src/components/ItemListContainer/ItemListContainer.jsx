import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.css';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';
import { getProducts } from '../../json/ProductsData';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()

    useEffect(() =>{
        setLoading(true);
        getProducts()
        .then((res)  => {
            if(categoryId){
                setProductos(res.filter((item)=> item.category === categoryId))
            }else{
                setProductos(res)
            }
        }) 
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    },[categoryId])

    if(loading){
        return(
            <p>Cargando...</p>
        ) 
    }

    return (
        
        <div>
            <h1>{greeting} <span>{categoryId && categoryId}</span></h1>
            <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;
