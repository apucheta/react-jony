// importaciones
import React from 'react';
import '../assets/css/Header.css';
import { Link } from 'react-router-dom';

// El componente en si
const Header = () => {
  //codigo js
  let nombre = 'Agustin Pucheta';
  const styles = {
    p: {
      color: 'white',
      backgroundColor: 'blue',
    },
  };
  //vista
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
    </div>
  );
};

// Exportacion
export default Header;
