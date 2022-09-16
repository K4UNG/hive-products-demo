import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from "./components/layout/Navbar";
import Product from './pages/Product';

const App: React.FC = () => {
  return <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </div>
}

export default App;
