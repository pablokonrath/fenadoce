# Fenadoce

Fenadoce é um projeto desenvolvido para permitir a votação das candidatas a rainha da Fenadoce 2024. Utiliza React e oferece diversas funcionalidades para gerenciar e visualizar os votos.

## Descrição

O projeto Fenadoce foi criado como parte da cadeira de Programação Web da faculdade. Ele permite que os usuários votem nas candidatas a rainha da Fenadoce 2024, podendo também desfazer votos, visualizar as três candidatas mais votadas e uma classificação geral das dez mais votadas. Os dados são armazenados localmente no navegador utilizando localStorage.

## Funcionalidades

- Votação em candidatas
- Desfazer voto
- Visualização das três candidatas mais votadas
- Classificação geral das dez candidatas mais votadas
- Armazenamento de dados no localStorage
- Adição de novas candidatas

## Tecnologias Utilizadas

- React

## Requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente.

1. Clone este repositório:

   ```sh
   git clone https://github.com/seu-usuario/fenadoce.git
   ```

2. Navegue até o diretório do projeto:

   ```sh
   cd fenadoce
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

4. Execute o projeto:
   ```sh
   npm run dev
   ```

## Como Usar

Após seguir os passos de instalação, o projeto estará disponível para ser acessado no navegador em `http://localhost:3000` (ou outro endereço indicado no terminal). A partir daí, você poderá interagir com as funcionalidades de votação, desfazer votos, visualizar as candidatas mais votadas e adicionar novas candidatas.

### Inicializar Dados das Candidatas

O projeto inclui um arquivo JSON com algumas candidatas predefinidas que podem ser carregadas no localStorage para começar. Para carregar esses dados, siga os passos abaixo:

1. No console do navegador, abra as Ferramentas de Desenvolvimento (normalmente pressionando `F12` ou `Ctrl+Shift+I`).
2. Navegue até a aba `Console`.
3. Copie e cole o seguinte comando no console para carregar os dados das candidatas:
   ```js
   const candidatas = [
     /* conteúdo do JSON com as candidatas */
   ];
   localStorage.setItem('candidatas', JSON.stringify(candidatas));
   ```

## Autor

Este projeto foi desenvolvido como parte da disciplina de Programação Web na faculdade.

---

Qualquer dúvida ou sugestão, sinta-se à vontade para abrir uma [issue](https://github.com/seu-usuario/fenadoce/issues) no repositório.
