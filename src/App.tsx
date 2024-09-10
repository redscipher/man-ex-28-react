// importacoes
// import { useState } from 'react';
import { useState } from 'react';
import Perfil from './componentes/Cab';
// import Formulario from './componentes/Formulario';
import ListaRepos from './componentes/listaRepos';

function App() {

  // const [formVisivel, setFormVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <input type="text" onBlur={(e: any) => setNomeUsuario(e.target.value)} />
      {/* condicao */}
      {nomeUsuario.length > 0 && (
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
