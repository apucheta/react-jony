import { useState, useEffect } from 'react';
import Cuenta from './Cuenta';

//useState: hook para manejar informacion DENTRO del componente
//useEffect: para conectar con API's del exterior ("puente entre el exterior y react")

export default function Hooks() {
  const [cuenta, setCuenta] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setCuenta(cuenta + 1);
    console.log(cuenta);
  };
  useEffect(() => {
    console.log('ejecutando useEffect');
  }, []); // lo que le pasemos aca es lo que va a escuchar los cambios
  // [] escucha el inicio del componente
  // vacio escucha TODOS los cambios que haya en el componente

  return (
    <div>
      {cuenta === 0 ? (
        <h1>Arranquemos a contar ovejas!!!</h1>
      ) : (
        <Cuenta cuenta={cuenta} titulo='titulo gigante'></Cuenta>
      )}

      <button type='button' className='btn btn-success' onClick={handleClick}>
        Contar otra
      </button>
    </div>
  );
}
