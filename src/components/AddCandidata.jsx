import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './AddCandidata.css';
import { toast } from 'sonner';

//Criei uma constante para armazenar o nome utilizado para acessar o localStorage, facilitando a manutenção futura se o nome da chave mudar.
const STORAGE_KEY = 'candidatas';

function AddCandidata() {
  const { register, handleSubmit, reset } = useForm();
  const [candidatas, setCandidatas] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  );
  //Agora, cria uma nova candidata com base nos dados do formulário e concatena essa nova candidata com a lista existente (candidatas) usando o spread operator ....
  const cadastrarCandidata = (dados) => {
    const candidata = {
      nome: dados.nome,
      clube: dados.clube,
      idade: dados.idade,
      foto: dados.foto,
      votos: 0,
      emails: '',
    };

    const candidatasAtualizadas = [...candidatas, candidata];
    setCandidatas(candidatasAtualizadas);
    //Atualiza o localStorage com a lista atualizada de candidatas após adicionar a nova candidata.
    localStorage.setItem(STORAGE_KEY, JSON.stringify(candidatasAtualizadas));
    toast.success('Ok! Candidata Registrada');
    reset();
  };

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
