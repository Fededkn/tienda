  import React from "react";
  import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
  import CartWidget from "./components/CartWidget/CartWidget";
  import ButtonComponent from './components/ButtonComponent/ButtonComponent';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import MainRouter from './routes/MainRouter';
import { CartProvider } from "./CartContext/CartContext";


const App = () => {

  return (
    <div>
      <main>
        <CartProvider>
          <MainRouter/>
        </CartProvider>
      
      </main>

    </div>
  );
}

export default App;
