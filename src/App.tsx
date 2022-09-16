import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from "./components/layout/Navbar";
import Product from './pages/Product';
import Auth from './pages/Auth';

const App: React.FC = () => {
  const { pathname } = useLocation()
  return <div>
    {pathname !== '/auth' && <Navbar />}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/products' element={<Products />} />
      <Route path='/products/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  </div>
}

export default App;
