import React from 'react';
import Questao01B from './Questao01B';

//função arrow e define o array lista, que contém três objetos.
const Questao01A = () => {
  const lista = [
    { a: 10, b: 3, c: 7 },
    { a: 5, b: -3, c: 9 },
    { a: 1, b: 9, c: 40 }
  ];

  //Este componente chama Questao01B e passa lista como prop.
  return (
    <div>
      <Questao01B lista={lista} />
    </div>
  );
};

export default Questao01A;

