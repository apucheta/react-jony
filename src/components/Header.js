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
  const handleClick = (e) => {
    const nombre = e.target.getAttribute('name');
    if (nombre == 'secondary') {
      alert('me fui clickeadazo, soy el secondary');
    }
  };

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  //vista
  return (
    <div>
      <h1>Hola, mi nombre es {nombre}</h1>
      <p style={styles.p}>Hola, soy un p rojo</p>
      <button
        type='button'
        className='btn btn-primary'
        name='primary'
        onClick={handleClick}
      >
        Primary
      </button>
      <button
        type='button'
        className='btn btn-secondary'
        name='secondary'
        onClick={handleClick}
      >
        Secondary
      </button>
      <button
        type='button'
        className='btn btn-success'
        name='success'
        onClick={handleClick}
      >
        Success
      </button>
      <input type='text' onChange={handleChange} />
    </div>
  );
};

// Exportacion
export default Header;
