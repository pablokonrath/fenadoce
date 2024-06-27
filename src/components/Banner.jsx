import React from 'react';
import './Banner.css';
import { Link } from 'react-scroll';

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner_conteudo">
        <h1>Votação Popular</h1>
        <p>
          É a hora de escolher a sua torcida para uma das candidatas! A mais
          votada garantirá vaga entre as 3 finalistas na classificação final,
          que será conhecida no dia 12 de julho.
        </p>
        <Link to="candidatas" smooth={true} duration={1000}>
          <a href="#candidatas">VOTE NA SUA PREFERIDA</a>
        </Link>
      </div>
    </div>
  );
}
