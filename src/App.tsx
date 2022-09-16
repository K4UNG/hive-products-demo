import React, { useContext } from 'react';
import { authContext } from './store/authContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Navbar from "./components/layout/Navbar";
import Product from './pages/Product';
import Auth from './pages/Auth';

const App: React.FC = () => {
  const { pathname } = useLocation()
  const { isLoggedin } = useContext(authContext);

  return <div>
    {pathname !== '/auth' && isLoggedin && <Navbar />}
    <Routes>
      {isLoggedin && <Route path='/' element={<Home />} />}
      {!isLoggedin && <Route path='/auth' element={<Auth />} />}
      {isLoggedin && <Route path='/products' element={<Products />} />}
      {isLoggedin && <Route path='/products/:id' element={<Product />} />}
      {isLoggedin && <Route path='/cart' element={<Cart />} />}
    </Routes>
  </div>
}

export default App;
