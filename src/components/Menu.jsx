import React from 'react';
import './Menu.css';
import 'react-responsive-modal/styles.css';
import Modal from 'react-responsive-modal';
import { useEffect, useState } from 'react';
import AddCandidata from './AddCandidata';
import { Link } from 'react-scroll';

export default function Menu({ candidatas, setCandidatas }) {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="container--fluido">
      <div className="menu">
        <div className="menu__logo">
          <a href="#inicio">
            <img src="logo.png" alt="logo" />
          </a>
        </div>
        <div className="menu__link" id="inicio">
          <ul>
            <li>
              <Link to="candidatas" smooth={true} duration={1000}>
                <a href="#candidatas">Candidatas</a>
              </Link>
            </li>
            <li>
              <Link to="classificacao" smooth={true} duration={1000}>
                <a href="#classificacao">Classificação</a>
              </Link>
            </li>
            <li>
              {' '}
              <a className="menu__botao" onClick={onOpenModal}>
                Cadastrar Candidata
              </a>
            </li>
          </ul>
        </div>
        <Modal open={open} onClose={onCloseModal} center>
          <AddCandidata candidatas={candidatas} setCandidatas={setCandidatas} />
        </Modal>
      </div>
    </div>
  );
}
