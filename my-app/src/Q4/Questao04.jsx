import React, { useState, useEffect } from 'react';

const Questao04 = () => {
// Dentro do useEffect, o then processa a Promise criada e calcular 
// as capitais com maior e meor população
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState('');
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState('');



// Substitui a chamada para a API externa por uma Promise chamada fetchData 
// que (resolve) um array tendo as informações das capitais e suas populações.
  const fetchData = () => {
    return new Promise((resolve) => {
      const data = [
        {"capital":["Dublin"],"population":4994724},
        {"capital":["Nicosia"],"population":1207361},
        {"capital":["Madrid"],"population":47351567}
      ];
      resolve(data);
    });
  };

  useEffect(() => {
    fetchData()
      .then(data => {
        // Inicializando variáveis
        let maiorPopulacao = -Infinity;
        let menorPopulacao = Infinity;
        let indiceMaiorPopulacao = 0;
        let indiceMenorPopulacao = 0;

        // Percorre o array retornado pela api
        data.forEach((country, index) => {
          // Verifica se a população atual é maior que a maior já encontrada
          if (country.population > maiorPopulacao) {
            maiorPopulacao = country.population;
            indiceMaiorPopulacao = index;
          }
          // Verifica se a população atual é menor que a menor já encontrada
          if (country.population < menorPopulacao) {
            menorPopulacao = country.population;
            indiceMenorPopulacao = index;
          }
        });

        // Atualiza os estados com as capitais de maior e menor população
        setCapitalMaiorPopulacao(data[indiceMaiorPopulacao].capital[0]);
        setCapitalMenorPopulacao(data[indiceMenorPopulacao].capital[0]);
      })
      .catch(error => console.log(error)); //pega o erro
  }, []);


  // O resto do código permanece o mesmo, exibindo a capital com maior e menor população.
  // Ademias, o componente Questao04 funcionará da mesma maneira que Questao03, mas utilizando uma 
  //Promise local em vez de fazer uma chamada de API.
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Capitais da Europa</h1>
      <p><strong>Capital com maior população:</strong> {capitalMaiorPopulacao}</p>
      <p><strong>Capital com menor população:</strong> {capitalMenorPopulacao}</p>
    </div>
  );
};

export default Questao04;

