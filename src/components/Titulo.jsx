import './Titulo.css';

function Titulo(conteudo) {
  return (
    <div className="titulo">
      <h1 className="marcador">{conteudo.titulo}</h1>
      <span>{conteudo.subTitulo}</span>
    </div>
  );
}

export default Titulo;
