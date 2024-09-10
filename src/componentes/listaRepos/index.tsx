import { useEffect, useState } from "react";
import estilos from './repos.module.css';

const ListaRepos = (props: any) => {

    // desestrutura objeto
    const { nomeUsuario } = props;

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [flgErro, setFlgErro] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`).then(res => res.json())
            .then(resJson => {
                console.log('entrou aqui 1')
                // prepara carregamento
                setEstaCarregando(true);
                setFlgErro(false);
                setRepos([]);
                console.log('resetando qtd. repos: ' + repos.length);
                // espera p/ carregamento
                setTimeout(() => {
                    setRepos(resJson);
                    setEstaCarregando(false);
                    // validacao de erro
                    console.log(repos);
                    setFlgErro(repos.length == null || repos.length == undefined ? true : false);
                    console.log('qtd. repos: ' + repos.length);
                    console.log('Houve erro ? ' + flgErro);
                }, 1000)})
            .catch((e: any) => {
                console.log('entrou aqui 2')
                // exibicao do erro p/ usuario
                setFlgErro(true);
                console.log(e)})
            .finally(()=>{
                console.log('finally qtd. repos: ' + repos.length);
                console.log('finally Houve erro ? ' + flgErro);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            {flgErro ? (
                <h2>Não foi encontrado um perfil no GitHub com este nome de usuário.</h2>
            ) : repos.length > 0 && (
                <ul className={estilos.lista}>
                    {repos.map((repo: any) => (
                        <li className={estilos.listaItem} key={repo.id}>
                            <div className={estilos.listaItemNome}>
                                <b>Nome: </b> {repo.name}
                            </div>
                            <div className={estilos.listaItemLinguagem}>
                                <b> | Linguagem: </b> {repo.language} <b> | </b>
                            </div>
                            <a className={estilos.listaItemLink} target="_blank" href={repo.html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ListaRepos;