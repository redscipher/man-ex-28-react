// importacoes
import './cab.css'

// parametro 'props' sao os atributos passados na chamada do componente
const Perfil = (props: any) => {

    // desestrutura objeto
    const { endereco, nome } = props;

    return (
        <div>
            {/* converte um objeto em string */}
            {JSON.stringify(props)}
            <img className="perfil-avatar" src={endereco} alt="" />
            <h3 className="perfil-titulo">{nome}</h3>
        </div>
    )
}

export default Perfil;