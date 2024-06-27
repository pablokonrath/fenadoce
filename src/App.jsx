import './App.css';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Titulo from './components/Titulo';
import Card from './components/Card';
import Classificacao from './components/Classificacao';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
import { Element } from 'react-scroll';
function App() {
  return (
    <>
      <Menu />
      <Banner />
      <Element name="candidatas">
        <Titulo
          titulo="Candidatas a Rainha da Fenadoce 2024"
          subTitulo="Escolha a sua Preferida"
        />
      </Element>
      <Toaster richColors position="top-right" />
      <Card />
      <Element name="classificacao">
        <Titulo titulo="Classificação" subTitulo="Top 3" />
      </Element>
      <Classificacao />
      <Footer />
    </>
  );
}

export default App;
