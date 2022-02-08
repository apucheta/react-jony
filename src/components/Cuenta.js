import React from 'react';

export default function Cuenta(props) {
  let { titulo, cuenta } = props;
  return (
    <div>
      {cuenta > 1 ? (
        <h1>Contamos {cuenta} ovejas</h1>
      ) : (
        <h1>Contamos {cuenta} oveja</h1>
      )}
      {cuenta && <h1>Que bueno a ver si nos dormimos. {titulo}</h1>}
    </div>
  );
}
