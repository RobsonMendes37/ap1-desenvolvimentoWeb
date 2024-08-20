import React from 'react';

// usa uma função clássica
// Recebe lista como uma prop e usa o método map para iterar sobre cada objeto
function Questao01B({ lista }) {

  //exibe o maior valor de cada objeto dentro da lista
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Maiores Números</h2>
      <ul>
        {lista.map((item, index) => {
          const maiorValor = Math.max(item.a, item.b, item.c);
          return <li key={index}>Item {index + 1}: {maiorValor}</li>; 
        })}
      </ul>
    </div>
  );
}

export default Questao01B;
