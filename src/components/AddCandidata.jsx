import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './AddCandidata.css';
import { toast } from 'sonner';

function AddCandidata() {
  const { register, handleSubmit, reset } = useForm();
  const [candidatas, setCandidatas] = useState('');

  function cadastrarCandidata(dados) {
    const candidatas = JSON.parse(localStorage.getItem('candidatas')) || [];
    candidatas.push({
      nome: dados.nome,
      clube: dados.clube,
      idade: dados.idade,
      foto: dados.foto,
      votos: 0,
      emails: '',
    });

    setCandidatas(candidatas);
    localStorage.setItem('candidatas', JSON.stringify(candidatas));
    toast.success('Ok! Candidata Registrada');
    reset();
  }

  return (
    <div className="cadastro">
      <h2 className="cadastro__titulo">Cadastro de candidata</h2>
      <form onSubmit={handleSubmit(cadastrarCandidata)}>
        <p>
          <label htmlFor="nome">Nome Completo:</label>
          <br />
          <input
            type="text"
            id="nome"
            required
            size={40}
            {...register('nome')}
          />
        </p>
        <p>
          <label htmlFor="idade">Idade:</label>
          <br />
          <input
            type="number"
            id="idade"
            required
            size={30}
            {...register('idade')}
          />
        </p>
        <p>
          <label htmlFor="clube">Clube:</label>
          <br />
          <input
            type="text"
            id="clube"
            required
            size={20}
            {...register('clube')}
          />
        </p>
        <p>
          <label htmlFor="foto">URL Foto</label>
          <br />
          <input
            type="text"
            id="foto"
            required
            size={60}
            {...register('foto')}
          />
        </p>
        <input className="btn" type="submit" value="Cadastrar" />
      </form>
    </div>
  );
}

export default AddCandidata;
