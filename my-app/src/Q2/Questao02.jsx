import React, { useState } from 'react';

const Questao02 = () => {
  // Declarando um estado 'virar' com valor inicial false
  const [virar, setVirar] = useState(false);

  // Função que é chamada quando o botão é clicado que atualiza o estado 'virar'
  const handleClick = () => {
    setVirar(prevVirar => !prevVirar);
  };

  // Dependendo do estado 'virar', a variável 'imagem' recebe o URL da frente ou do verso do Pikachu
  const imagem = virar
    ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png' // Verso 
    : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'; // Frente 

  // jsx que será renderizado na tela com um estilo simples
  return (
    <div style={{ textAlign: 'center' }}> 
      <h2>Pikachu</h2>
      <img src={imagem} alt="Pikachu" style={{ width: '200px', height: '200px' }} /> 
      <br />
      {/* Botão que chama a função handleClick para alternar a imagem no clique*/}
      <button onClick={handleClick} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}> 
        Virar 
      </button>
    </div>
  );
};

export default Questao02;
