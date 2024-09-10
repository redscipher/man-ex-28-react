// importacoes
import { useState } from 'react';
import Perfil from './componentes/Cab';
import Formulario from './componentes/Formulario';
import ListaRepos from './componentes/listaRepos';

function App() {

  const [formVisivel, setFormVisivel] = useState(true);

  return (
    <>
      {/* passa valores p/ atributos do componente */}
      <Perfil nome="fulano" endereco="https://github.com/redscipher.png"></Perfil>
      {/* define um condicao p/ exibir o formulario */}
      {formVisivel && <Formulario></Formulario>}
      <button onClick={() => setFormVisivel(!formVisivel)} type='button'>Formulario</button>
      {/* lista  */}
      <ListaRepos></ListaRepos>
    </>
  )
}

export default App
