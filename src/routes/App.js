import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Somos from '../containers/Somos';
import Home from '../containers/Home';
import Contacto from '../containers/Contacto';
import Layout from '../components/Layout';
import Productos from '../containers/Productos';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/somos' element={<Somos />}></Route>
          <Route exact path='/contacto' element={<Contacto />}></Route>
          <Route exact path='/productos' element={<Productos />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
