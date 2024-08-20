import React, { useState, useEffect } from 'react';

const Questao03 = () => {
  // Declaro dois estados para armazenar as capitais de maior e menor população
  const [capitalMaiorPopulacao, setCapitalMaiorPopulacao] = useState(''); 
  const [capitalMenorPopulacao, setCapitalMenorPopulacao] = useState(''); 

  useEffect(() => {
    // Faze uma requisição à API 
    fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
      .then(response => response.json()) // Convertendo a resposta para JSON
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
      // Captura e exibi qualquer erro
      .catch(error => console.log(error));
  }, []); // O array vazio [] faz com que o useEffect execute apenas uma vez depois de "montar" o componente

  // retorna o jsx que será renderizado na tela
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Capitais da Europa</h1>
      <p><strong>Capital com maior população:</strong> {capitalMaiorPopulacao}</p>
      <p><strong>Capital com menor população:</strong> {capitalMenorPopulacao}</p>
    </div>
  );
};

// Exportá o componente 
export default Questao03;
