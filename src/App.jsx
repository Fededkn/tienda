  import {useState} from 'react'
  import React from "react";
  import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
  import CartWidget from "./components/CartWidget/CartWidget";
  import ButtonComponent from './components/ButtonComponent/ButtonComponent';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import MainRouter from './routes/MainRouter';


const App = () => {

  return (
    <div>
      <main>
      <MainRouter/>
      </main>

    </div>
  );
}

export default App;
