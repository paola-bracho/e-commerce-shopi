import './App.css';
import { ItemDetailContainer } from './componets/ItemDetailContainer';
import { ItemListContainer } from './componets/ItemListContainer';
import { Navbar } from './componets/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
