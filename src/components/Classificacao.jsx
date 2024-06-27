import React from 'react';
import './Classificacao.css';
import { useEffect, useState } from 'react';
import Titulo from './Titulo';
export default function Classificacao() {
  const [candidatas, setCandidatas] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('candidatas')) {
      const candidatas2 = JSON.parse(localStorage.getItem('candidatas'));
      setCandidatas(candidatas2);
    }
  }, []);

  //função pra classificar as candidatas
  //pra nao precisar criar 2 função eu passei um parametro assim pude usar uma função pra 2 classificação top3 e top10
  const maisVotadas = (top) => {
    const candidatas2 = [...candidatas];

    // Ordena as candidatas pelo número de votos em ordem decrescente
    candidatas2.sort((a, b) => (b.votos || 0) - (a.votos || 0));
    if (top == 'top3') {
      return candidatas2.slice(0, 3);
    } else if (top == 'top10') {
      return candidatas2.slice(0, 10);
    }
  };

  const top3 = maisVotadas('top3');
  const top10 = maisVotadas('top10');

  return (
    <>
      <div className="classificacao" id="classificacao">
        <div className="top-3">
          {top3[1] && (
            <div key={top3[1].email} className="card__item">
              <span>2</span>
              <div className="avatar">
                <img src={top3[1].foto} alt={top3[1].nome} />
              </div>
              <h2 className="marcador">{top3[1].nome}</h2>
              <p>{top3[1].votos || 0}</p>
            </div>
          )}
          {top3[0] && (
            <div
              key={top3[0].email}
              className="card__item card__item--primeiro"
            >
              <span>1</span>
              <div className="avatar">
                <img src={top3[0].foto} alt={top3[0].nome} />
              </div>
              <h2 className="marcador">{top3[0].nome}</h2>
              <p>{top3[0].votos || 0}</p>
            </div>
          )}
          {top3[2] && (
            <div key={top3[2].email} className="card__item">
              <span>3</span>
              <div className="avatar">
                <img src={top3[2].foto} alt={top3[2].nome} />
              </div>
              <h2 className="marcador">{top3[2].nome}</h2>
              <p>{top3[2].votos || 0}</p>
            </div>
          )}
        </div>
        <Titulo titulo="Classificação Geral" subTitulo="Top 10" />
        <div className="classificacao-geral">
          <div className="card__item">
            <span>Nº</span>
            <div className="avatar"></div>
            <h2>Nome Completo</h2>
            <p>Qt</p>
          </div>
          {top10.map((candidata, index) => (
            <div key={index} className="card__item">
              <span>{index + 1}º</span>
              <div className="avatar">
                <img src={top10[index].foto} alt={candidata.nome} />
              </div>
              <h2>{candidata.nome}</h2>
              <p>{candidata.votos || 0}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
