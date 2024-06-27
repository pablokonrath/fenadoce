import React from 'react';
import './Card.css';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner';

export default function Card() {
  const [candidatas, setCandidatas] = useState([]);
  const [copiaCandidatas, setCopiaCandidatas] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    if (localStorage.getItem('candidatas')) {
      const candidatas2 = JSON.parse(localStorage.getItem('candidatas'));
      setCandidatas(candidatas2);
      setCopiaCandidatas(candidatas2);
    }
  }, []);

  function Votar(event, candidata) {
    event.preventDefault();
    const email = prompt('Qual seu email?');

    if (!email) {
      return;
    }

    // Recupera a lista de candidatas do localStorage
    let candidatas2 = [...candidatas];

    const indice = candidatas2.findIndex((x) => x.nome === candidata);

    // Verifica se o email já foi registrado para essa candidata
    if (
      candidatas2[indice].emails &&
      candidatas2[indice].emails.includes(email)
    ) {
      return toast.error('Este email já registrou um voto.');
    }

    // Adiciona o email ao array de emails
    if (!candidatas2[indice].emails) {
      candidatas2[indice].emails = [];
    }
    candidatas2[indice].emails.push(email);

    // soma os votos
    if (!candidatas2[indice].votos) {
      candidatas2[indice].votos = 0;
    }
    candidatas2[indice].votos += 1;
    toast.success('Voto Registrado com Sucesso');

    setCandidatas(candidatas2);
    localStorage.setItem('candidatas', JSON.stringify(candidatas2));
  }

  function mudarVoto(event, candidata) {
    event.preventDefault();
    const email = prompt('Qual seu email?');

    // Verifica se o email foi informado
    if (!email) {
      return;
    }

    // Recupera a lista de candidatas do localStorage
    let candidatas2 = [...candidatas];
    // Encontra o índice da candidata para a qual o usuário deseja votar

    const indice = candidatas2.findIndex((x) => x.nome === candidata);

    if (candidatas2[indice].votos > 0) {
      candidatas2[indice].votos -= 1;
    } else {
      candidatas2[indice].votos = 0;
    }

    // Utilizamos o filtro pra remover o email especifico porque o pop estava removendo o ultimo item apenas
    candidatas2[indice].emails = candidatas2[indice].emails.filter(
      (e) => e !== email,
    );

    // Atualiza o estado e localStorage
    setCandidatas(candidatas2);
    localStorage.setItem('candidatas', JSON.stringify(candidatas2));
    toast.error('Voto Desfeito com sucesso');
  }

  const handlePesquisa = (e) => {
    const value = busca.toLowerCase();
    const candidatasFiltradas = copiaCandidatas.filter((candidata) => {
      return (
        candidata.nome.toLowerCase().includes(value) ||
        candidata.clube.toLowerCase().includes(value)
      );
    });
    setCandidatas(candidatasFiltradas);
  };

  return (
    <>
      <div className="busca">
        <input
          type="text"
          className="input-candidata"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Pesquisar candidata"
        />
        <a onClick={handlePesquisa}>
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#ccc"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="grid-container">
        {candidatas.map((candidata, index) => (
          <div className="card" key={index}>
            <img src={candidata.foto} alt="foto" className="card__foto" />
            <div className="card__desc">
              <h2>{candidata.nome}</h2>
              <span>{candidata.idade}</span>
              <span className="club">Clube: {candidata.clube}</span>
            </div>
            <div className="card__acao">
              {candidata.votos == '' ? (
                <a
                  key={candidata.id}
                  href=""
                  className="card__acao__voto"
                  onClick={(e) => Votar(e, candidata.nome)}
                >
                  Vote
                </a>
              ) : (
                <div>
                  <a
                    key={candidata.id}
                    href=""
                    className="card__acao__voto votarNovamente"
                    onClick={(e) => Votar(e, candidata.nome)}
                  >
                    Votar Novamente
                  </a>
                  <a
                    key={candidata.id}
                    href=""
                    className="card__acao__voto"
                    onClick={(e) => mudarVoto(e, candidata.nome)}
                  >
                    Mudar Voto
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
