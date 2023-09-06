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

    <MainRouter/>

  )
}

export default App;
