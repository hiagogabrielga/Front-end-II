'use client'
import React, { useState, useEffect } from "react";
const urlPadrao = "https://api-clinica-2a.onrender.com";
import styles from "./pacientes.module.css";
import { X } from "lucide-react";

export default function pacientes() {
    const [paciente, setPaciente] = useState([]);
    const [pacientePorNome, setPacientePorNome] = useState([]);
    const [showListaDePesquisaPaciente, setShowListaDePesquisaPaciente] = useState(false);

    async function apresetarTodosPaciente() {
        try {
            const response = await fetch(`${urlPadrao}/pacientes`)
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }
            const data = await response.json();
            setPaciente(data);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function pesquisarPacientePorNome(nome) {
        try {
            const response = await fetch(`${urlPadrao}/pacientes?nome=${nome}`)
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }
            const data = await response.json();
            setPacientePorNome(data);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        apresetarTodosPaciente();
        pesquisarPacientePorNome('');
        if (showListaDePesquisaPaciente) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showListaDePesquisaPaciente]);

    return (
        <div className={styles.container}>
            <div className={styles.containerPesquisa}>
                <button className={styles.botaoPesquisar} onClick={() => { setShowListaDePesquisaPaciente(!showListaDePesquisaPaciente) }}>Pesquisar paciente</button>
                {
                    showListaDePesquisaPaciente &&
                    <div className={styles.containerListaPesquisa}>
                        <div className={styles.containerInputELista}>
                            <div className={styles.containerInput}>
                                <button onClick={() => { setShowListaDePesquisaPaciente(!showListaDePesquisaPaciente) }} className={styles.botaoFechar}><X className={styles.iconeFechar} size={25} /></button>
                                <input
                                    type="text"
                                    onChange={(e) => pesquisarPacientePorNome(e.target.value)}
                                    placeholder="Pesquisar paciente"
                                    className={styles.input}
                                    onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                                />
                            </div>
                            <div className={styles.containerLista}>
                                <ul className={styles.listaPesquisa}>
                                    {pacientePorNome.map((paciente) => (
                                        <li className={styles.linhaListaPesquisa} key={paciente.id}>{paciente.nome}</li>
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
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {paciente.map((paciente) => (
                            <tr className={styles.linhaCorpo} key={paciente.id}>
                                <td>{paciente.id}</td>
                                <td>{paciente.nome}</td>
                                <td>{paciente.telefone}</td>
                                <td>{paciente.email}</td>
                                <td>{paciente.cpf}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}