import React, { useContext, useState, useEffect } from "react";
import { authContext } from "./store/authContext";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Navbar from "./components/layout/Navbar";
import Product from "./pages/Product";
import Auth from "./pages/Auth";

const App: React.FC = () => {
  const { pathname } = useLocation();
  const { isLoggedin } = useContext(authContext);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <div className="wrapper">
      {pathname !== "/auth" && isLoggedin && <Navbar />}
      <Routes>
        {isLoggedin && <Route path="/" element={<Home />} />}
        {!isLoggedin && <Route path="/auth" element={<Auth />} />}
        {isLoggedin && <Route path="/products" element={<Products />} />}
        {isLoggedin && <Route path="/products/:id" element={<Product />} />}
        {isLoggedin && <Route path="/cart" element={<Cart />} />}
        {loaded && <Route
          path="*"
          element={<Navigate to={isLoggedin ? "/products" : "/auth"} replace />}
        />}
      </Routes>
    </div>
  );
};

export default App;
