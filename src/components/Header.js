// importaciones
import React from 'react';
import '../assets/css/Header.css';

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
      <h1>Hola, mi nombre es {nombre}</h1>
      <p style={styles.p}>Hola, soy un p rojo</p>
    </div>
  );
};

// Exportacion
export default Header;
