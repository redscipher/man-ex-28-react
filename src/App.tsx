// importacoes
import { useState } from 'react';
import Perfil from './componentes/Cab';
// import Formulario from './componentes/Formulario';
import ListaRepos from './componentes/listaRepos';

function App() {


  // const [formVisivel, setFormVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [flgCarregar, setflgCarregar] = useState(false);

  function carregaUsuario(e: any) {
    try {
      // desativa padrao
      // e.preventDefault();
      // carrega sinal
      setflgCarregar(true);
    } catch (error: any) {
      console.log(error.stack)
    }
  }

  return (
    <>
      <form className="container" action="">
        <input type="text" placeholder="Entre com seu nome de usuário do GitHub" onBlur={(e: any) => setNomeUsuario(e.target.value)} />
        <button type="button" onClick={carregaUsuario}>Carregar</button>
      </form>
      {/* condicao */}
      {flgCarregar && (
        <>
          {/* passa valores p/ atributos do componente */}
          <Perfil nomeUsuario={nomeUsuario}></Perfil>
          {/* lista  */}
          <ListaRepos nomeUsuario={nomeUsuario}></ListaRepos>
        </>
      )}
      {/* define um condicao p/ exibir o formulario */}
      {/* {formVisivel && <Formulario></Formulario>}
      <button onClick={() => setFormVisivel(!formVisivel)} type='button'>Formulario</button> */}
    </>
  )
}

export default App
