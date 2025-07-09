import { useEffect, useState } from "react";

import {
    itemName,
    itemLanguage,
    itemLink,
    item,
    list,
} from "./ReposList.module.css";

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstacarregando] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then((res) => res.json())
        .then((resJson) => {
            setTimeout(() => {
            setEstacarregando(false);
            setRepos(resJson);
            }, 3000);
        });
    }, [nomeUsuario]);

    return (
        <div className="container">
        {estaCarregando ? (
            <h1>Carregando...</h1>
        ) : (
            <ul className={list}>
            {repos.map(({ name, language, html_url, id }) => (
                <li className={item} key={id}>
                <div className={itemName}>
                    <b>Nome: </b> {name}
                </div>

                <div className={itemLanguage}>
                    <b>Linguagem: </b> {language}
                </div>

                <a
                    className={itemLink}
                    target="_blank"
                    href={html_url}
                    rel="noreferrer"
                >
                    Visitar no Github
                </a>
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default ReposList;
