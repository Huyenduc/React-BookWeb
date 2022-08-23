import React, { useState } from 'react'
import Product from './Page/Product/Products'
import ProductDetail from './Page/Product/ProductDetail'
import Login from './Page/User/Login'
import './index.css';

import Home from './Page/Home/Home'
import { useSelector } from 'react-redux'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Cart from './Page/Cart/Cart'
import Header from './common/header/Header'
import Wrapper from './common/header/wrapper/Wrapper';
import Footer from './common/header/Footer';


function App() {
  // const state = useSelector((state)=> state.handleCart)
  const [cart, setCart] = useState([]);

  const handleCart2 = (item) => {
    // Update cart item quantity if already in cart
    if (cart.some((cartItem) => cartItem.idBook === item.idBook)) {
      setCart((cart) =>
        cart.map((cartItem) =>
          cartItem.idBook === item.idBook
            ? {
                ...cartItem,
                amount: cartItem.amount + 1
              }
            : cartItem
        )
      );
      return;
    }

    // Add to cart
    setCart((cart) => [
      ...cart,
      { ...item, amount: 1 } // <-- initial amount 1
    ]);
  };
  

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);

    const arr = cart;
    arr[ind].amount += d;
    // console.log(arr)
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
    // console.log(arr)
  };
  return (
    <>
      <Header size={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Product" element={<Product handleCart2={handleCart2} />} />
        <Route path="Cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        <Route path="Product/:idBook" element={<ProductDetail />} />
        <Route path="/Login" element ={<Login/>}/>
      </Routes>
      <Wrapper />
      <Footer />

    </>
  );
}
export default App;
