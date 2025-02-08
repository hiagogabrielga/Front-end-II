'use client'
import React, { useState, useEffect } from "react";
const urlPadrao = "https://api-clinica-2a.onrender.com";
import styles from "./medicos.module.css";
import { X } from "lucide-react";

export default function medicos() {
    const [medicos, setMedicos] = useState([]);
    const [medicosPorNome, setMedicosPorNome] = useState([]);
    const [showListaDePesquisa, setShowListaDePesquisa] = useState(false);

    async function apresetarTodosMedicos() {
        try {
            const response = await fetch(`${urlPadrao}/medicos`)
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }
            const data = await response.json();
            setMedicos(data);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function pesquisarMedicoPorNome(nome) {

        try {
            const response = await fetch(`${urlPadrao}/medicos?nome=${nome}`)
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }
            const data = await response.json();
            setMedicosPorNome(data);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        apresetarTodosMedicos();
        pesquisarMedicoPorNome('')
        if (showListaDePesquisa) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showListaDePesquisa]);

    return (
        <div className={styles.container}>
            <div className={styles.containerPesquisa}>
                <button className={styles.botaoPesquisar} onClick={() => { setShowListaDePesquisa(!showListaDePesquisa) }}>Pesquisar médico</button>
                {
                    showListaDePesquisa &&
                    <div className={styles.containerListaPesquisa}>
                        <div className={styles.containerInputELista}>
                            <div className={styles.containerInput}>
                                <button onClick={() => { setShowListaDePesquisa(!showListaDePesquisa) }} className={styles.botaoFechar}><X className={styles.iconeFechar} size={20} /></button>
                                <input
                                    type="text"
                                    onChange={(e) => pesquisarMedicoPorNome(e.target.value)}
                                    placeholder="Pesquisar médico"
                                    className={styles.input}
                                    onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                                />
                            </div>
                            <div className={styles.containerLista}>
                                <ul className={styles.listaPesquisa}>
                                    {medicosPorNome.map((medico) => (
                                        <li className={styles.linhaListaPesquisa} key={medico.id}>{medico.nome}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className={styles.tabelaContainer}>
                <table className={styles.tabela}>
                    <thead className={styles.cabecalho}>
                        <tr className={styles.linhaCabecalho}>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {medicos.map((medico) => (
                            <tr className={styles.linhaCorpo} key={medico.id}>
                                <td>{medico.id}</td>
                                <td>{medico.nome}</td>
                                <td>{medico.telefone}</td>
                                <td>{medico.email}</td>
                                <td>{medico.especialidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}