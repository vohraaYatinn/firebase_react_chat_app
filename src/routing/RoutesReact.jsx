import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Signout from '../pages/Signout';
import PageNotFound from '../pages/PageNotFound';

const RoutesReact = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/signout" element={<Signout />}/>
        <Route path="*" element={<PageNotFound />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesReact