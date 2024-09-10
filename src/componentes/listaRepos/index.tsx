import { useEffect, useState } from "react";
import estilos from './repos.module.css';

const ListaRepos = ({ nomeUsuario }: any) => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(false);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJson => {
                setEstaCarregando(true);
                setTimeout(() => {
                    setRepos(resJson);
                    setEstaCarregando(false);
                }, 3000);
            });
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
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