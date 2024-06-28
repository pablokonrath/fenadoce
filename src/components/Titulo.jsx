import React from 'react';
import PropTypes from 'prop-types';
import './Titulo.css';

// Foi criado a desestruturação que permite o acesso diretamente "titulo" e "subtitulo".
function Titulo({ titulo, subTitulo }) {
  return (
    <div className="titulo">
      <h1 className="marcador">{titulo}</h1>
      <span>{subTitulo}</span>
    </div>
  );
}

// Foi adicionado uma nova camada de validações das props passadas para o componente, podendo evitar futuros bugs.
Titulo.propTypes = {
  titulo: PropTypes.string.isRequired,
  subTitulo: PropTypes.string,
};

// Foi definido valores padrões para props que são opcionais. Caso o "subTitulo" não seja informado, ele será uma string vazia (`''`). 
// Desta forma. podendo evitar erros se uma prop opcional não for passada. 
Titulo.defaultProps = {
  subTitulo: '',
};

export default Titulo;
