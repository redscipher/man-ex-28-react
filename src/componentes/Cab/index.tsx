// importacoes
import estilos from './cab.module.css'

// parametro 'props' sao os atributos passados na chamada do componente
const Perfil = (props: any) => {

    // desestrutura objeto
    const { nomeUsuario } = props;

    return (
        <header className={estilos.cabecalho}>
            {/* converte um objeto em string */}
            {/* {JSON.stringify(props)} */}
            <img className={estilos.avatar} src={`https://github.com/${nomeUsuario}.png`} alt="" />
            <h1 className={estilos.nome}>{nomeUsuario}</h1>
        </header>
    )
}

export default Perfil;