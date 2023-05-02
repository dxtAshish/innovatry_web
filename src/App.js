import React from 'react'
import './App.css'; 
import Home from './screens/Home';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Buy from './component/Buy';
import Sell from './component/Sell';
export default function App() {
  return (
    <>
<Router>
  <div>
    <Routes>
     
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/Login' element={<Login/>}/>
      <Route exact path='/Signup' element={<Signup/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/Buy' element={<Buy/>}/>
      <Route exact path='/Buy/:product_id' element={<Buy/>}/>
      <Route exact path='/Sell' element={<Sell/>}/>
    </Routes>
  </div>
</Router>
    </>
   
  )
}
