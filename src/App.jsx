import './App.css';
import { ItemDetailContainer } from './componets/ItemDetailContainer';
import { ItemListContainer } from './componets/ItemListContainer';
import { Navbar } from './componets/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './componets/SignIn';
import { CartProvider } from './context/CartContext';
import { Cart } from './componets/Cart';

function App() {

  return (
    <div>
      <CartProvider>

        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/SignIn" element={<SignIn />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>

        </BrowserRouter>

      </CartProvider>
    </div>
  )
}

export default App
