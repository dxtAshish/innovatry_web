import React from 'react'
import './App.css'; 
import Home from './screens/Home';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Buy from './component/Buy';
import Sell from './component/Sell';
import Checkout from './component/Checkout';
import ProductDetail from './component/ProductDetail';
import About from './screens/About';
import SuccessPage from './screens/SuccessPage';
export default function App() {
  return (
    <>
<Router>
  <div>
    <Routes>
     
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/category/:category' element={<Home/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Signup' element={<Signup/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/Buy' element={<ProductDetail/>}/>
      <Route exact path='/Buy/:product_id' element={<ProductDetail/>}/>
      <Route exact path='/Sell' element={<Sell/>}/>
      <Route exact path='/checkout/:product_id' element={<Checkout/>}/>
      <Route exact path='/profile/:profile_url' element={<Profile/>}/>
      <Route exact path='/success' element={<SuccessPage/>}/>
      <Route exact path='/About' element={<About/>}/>

    </Routes>
  </div>
</Router>
    </>
   
  )
}
