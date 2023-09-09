import React from 'react'
<<<<<<< HEAD
import { useParams } from 'react-router-dom';


const Category = () => {
    const { categoryId } = useParams();

    const productos = [
        {
            id: 1,
            name: "Motherboard01",
            description: "Mother azul",
            price: 10000,
            pictureUrl: "",
            stock: "10",
            categories: "motherboards",
        },
        {
            id: 2,
            name: "Motherboard02",
            description: "Mother rojo",
            price: 10000,
            pictureUrl: "",
            stock: "10",
            categories: "motherboards",
        },
        {
            id: 3,
            name: "Motherboard03",
            description: "Mother verde",
            price: 11000,
            pictureUrl: "",
            stock: "8",
            categories: "motherboards",
        },
        {
            id: 4,
            name: "Motherboard04",
            description: "Mother amarillo",
            price: 12000,
            pictureUrl: "",
            stock: "7",
            categories: "motherboards",
        },
        {
            id: 5,
            name: "Procesador01",
            description: "procesador - Plateado",
            price: 15000,
            pictureUrl: "",
            stock: "15",
            categories: "procesadores",
        },
        {
            id: 6,
            name: "Procesador02",
            description: "Procesador - Negro",
            price: 16000,
            pictureUrl: "",
            stock: "12",
            categories: "procesadores",
        },
        {
            id: 7,
            name: "Procesador03",
            description: "Procesador Dorado",
            price: 18000,
            pictureUrl: "",
            stock: "9",
            categories: "procesadores",
        },
        {
            id: 8,
            name: "Procesador04",
            description: "Procesador Rojo",
            price: 17000,
            pictureUrl: "",
            stock: "11",
            categories: "procesadores",
        },
        {
            id: 9,
            name: "PlacaDeVideo01",
            description: "Azul",
            price: 25000,
            pictureUrl: "",
            stock: "6",
            categories: "placasdevideo",
        },
        {
            id: 10,
            name: "PlacaDeVideo02",
            description: "Verde",
            price: 26000,
            pictureUrl: "",
            stock: "5",
            categories: "placasdevideo",
        },
        {
            id: 11,
            name: "PlacaDeVideo03",
            description: "Plateado",
            price: 28000,
            pictureUrl: "",
            stock: "4",
            categories: "placasdevideo",
        },
        {
            id: 12,
            name: "PlacaDeVideo04",
            description: "Negro",
            price: 27000,
            pictureUrl: "",
            stock: "7",
            categories: "placasdevideo",
        }
    ]

    const filter = productos.filter((item) => item.categories === categoryId);

    return <div>
        {filter.map(item => {
            return (
                <div key={item.id}>
                    <label>{item.categories}</label>
                </div>
            )
        })}
    </div>;
};
        <div>Category</div>
    

export default Category
=======

export const Category = () => {
  return (
    <div>Category</div>
  )
}
>>>>>>> d569e9762616fef27b7860a21d47c6e5de136bb7
