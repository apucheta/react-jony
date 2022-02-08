import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Somos from '../containers/Somos';
import Home from '../containers/Home';
import Contacto from '../containers/Contacto';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/somos' element={<Somos />}></Route>
        <Route exact path='/contacto' element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
