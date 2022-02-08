import { useState, useEffect } from 'react';

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
  }, [cuenta]); // lo que le pasemos aca es lo que va a escuchar los cambios
  return (
    <div>
      {cuenta === 0 ? (
        <h1>Arranquemos a contar ovejas!!!</h1>
      ) : (
        <div>
          {cuenta > 1 ? (
            <h1>Contamos {cuenta} ovejas</h1>
          ) : (
            <h1>Contamos {cuenta} oveja</h1>
          )}
          {cuenta && <h1>Que bueno a ver si nos dormimos</h1>}
        </div>
      )}

      <button type='button' className='btn btn-success' onClick={handleClick}>
        Contar otra
      </button>
    </div>
  );
}
