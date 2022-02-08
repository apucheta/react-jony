import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Home.css';

export default function Home() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/somos'>Somos</Link>
          </li>
          <li>
            <Link to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </header>
      <h1>Hola, soy el home</h1>
    </div>
  );
}
