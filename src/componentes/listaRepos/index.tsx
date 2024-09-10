import { useEffect, useState } from "react";

const ListaRepos = () => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(false);

    useEffect(() => {
        fetch('https://api.github.com/users/redscipher/repos')
            .then(res => res.json())
            .then(resJson => {
                setTimeout(() => {
                    setEstaCarregando(true);
                    setRepos(resJson);
                }, 3000);
            });
    }, []);

    return (
        <>
            {estaCarregando && (
                <h1>Carregando...</h1>
            )}
            <ul>
                {repos.map((repo: any) => (
                    <li key={repo.id}>
                        <b>Nome: </b> {repo.name}
                        <b> | Linguagem: </b> {repo.language}
                        <b> | </b><a target="_blank" href={repo.html_url}>Visitar no GitHub</a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ListaRepos;