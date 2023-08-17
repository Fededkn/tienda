  import {useState} from 'react'
  import React from "react";
  import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
  import CartWidget from "./components/CartWidget/CartWidget";
  import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
  import ButtonComponent from './components/ButtonComponent/ButtonComponent';
  import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

    const [count, setCount] = useState(0)

    let incrementar = () => {
      setCount(count + 1)
    }

    let decrementar = () => {
      setCount(count - 1)
    }
  return (

    <div>
      <NavBarComponent/>
      <ItemListContainer greeting="¡Bienvenidx a Tienda Tech!" />

      <div>
        <h2>Contador: {count}</h2>
        <ButtonComponent label="Incrementar" bsButtonType="success" onClickFunction={incrementar}></ButtonComponent>
        
        <ButtonComponent label="Decrementar" bsButtonType="danger" onClickFunction={decrementar}></ButtonComponent>
      </div>
    </div>
  );
}

export default App;
