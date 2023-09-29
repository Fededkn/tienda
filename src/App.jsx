import { CartProvider } from './context/CartContext';
import MainLayout from './layouts/MainLayout';
import MainRouter from './routes/MainRouter';

function App() {

  return (
    <CartProvider>
      <MainLayout>
        <MainRouter />
      </MainLayout>
    </CartProvider>
  )
}

export default App
