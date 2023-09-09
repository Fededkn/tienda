  import {useState} from 'react'
  import React from "react";
  import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
  import CartWidget from "./components/CartWidget/CartWidget";
  import ButtonComponent from './components/ButtonComponent/ButtonComponent';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import MainRouter from './routes/MainRouter';


const App = () => {

<<<<<<< HEAD
  return (
    <div>
      <main>
      <MainRouter/>
      </main>

    </div>
  );
=======
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
>>>>>>> d569e9762616fef27b7860a21d47c6e5de136bb7
}

export default App;
