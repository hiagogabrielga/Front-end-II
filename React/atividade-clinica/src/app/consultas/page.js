'use client'
import React, { useState, useEffect } from "react";
import styles from "./consultas.module.css";
const urlPadrao = "https://api-clinica-2a.onrender.com";
import { X } from "lucide-react";

export default function consultas() {
    const [consultas, setConsultas] = useState([]);
    const [consultasPorMedico, setConsultasPorMedico] = useState([]);
    const [consultasPorPaciente, setConsultasPorPaciente] = useState([]);
    const [showListaDePesquisaMedico, setShowListaDePesquisaMedico] = useState(false);
    const [showListaDePesquisaPaciente, setShowListaDePesquisaPaciente] = useState(false);

    async function apresetarTodosConsultas() {
        try {
            const response = await fetch(`${urlPadrao}/consultas`)
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }
            const data = await response.json();
            setConsultas(data);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function pesquisarConsultaPorMedico(nome) {
        try {
            const response = await fetch(`${urlPadrao}/consultas?medico=${nome}`)
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }
            const data = await response.json();
            setConsultasPorMedico(data);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    async function pesquisarConsultaPorPaciente(nome) {
        try {
            const response = await fetch(`${urlPadrao}/consultas?paciente=${nome}`)
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }
            const data = await response.json();
            setConsultasPorPaciente(data);

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        apresetarTodosConsultas();
        pesquisarConsultaPorPaciente('');
        pesquisarConsultaPorMedico('');
        if (showListaDePesquisaMedico) {
            document.body.classList.add("no-scroll");
            setShowListaDePesquisaPaciente(false);
        } else if (showListaDePesquisaPaciente) {
            document.body.classList.add("no-scroll");
            setShowListaDePesquisaMedico(false);

        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showListaDePesquisaMedico, showListaDePesquisaPaciente]);

    return (
        <div className={styles.container}>
            <div className={styles.containerPesquisa}>
                <button className={styles.botaoPesquisar} onClick={() => { setShowListaDePesquisaMedico(!showListaDePesquisaMedico) }}>Pesquisar médico</button>
                {
                    showListaDePesquisaMedico &&
                    <div className={styles.containerListaPesquisa}>
                        <div className={styles.containerInputELista}>
                            <div className={styles.containerInput}>
                                <button onClick={() => { setShowListaDePesquisaMedico(!showListaDePesquisaMedico) }} className={styles.botaoFechar}><X className={styles.iconeFechar} size={20} /></button>
                                <input
                                    type="text"
                                    onChange={(e) => pesquisarConsultaPorMedico(e.target.value)}
                                    placeholder="Pesquisar médico"
                                    className={styles.input}
                                    onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                                />
                            </div>
                            <div className={styles.containerLista}>
                                <ul className={styles.listaPesquisa}>
                                    {consultasPorMedico.map((medico) => (
                                        <li className={styles.linhaListaPesquisa} key={medico.id}>{medico.nome}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                }

                <button onClick={() => { setShowListaDePesquisaPaciente(!showListaDePesquisaPaciente) }} className={styles.botaoPesquisar}>Pesquisar paciente</button>
                {
                    showListaDePesquisaPaciente &&
                    <div className={styles.containerListaPesquisa}>
                        <div className={styles.containerInputELista}>
                            <div className={styles.containerInput}>
                                <button onClick={() => { setShowListaDePesquisaPaciente(!showListaDePesquisaPaciente) }} className={styles.botaoFechar}><X className={styles.iconeFechar} size={20} /></button>
                                <input
                                    type="text"
                                    onChange={(e) => pesquisarConsultaPorPaciente(e.target.value)}
                                    placeholder="Pesquisar paciente"
                                    className={styles.input}
                                    onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')}
                                />
                            </div>
                            <div className={styles.containerLista}>
                                <ul className={styles.listaPesquisa}>
                                    {consultasPorPaciente.map((paciente) => (
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
                            <th>Médico</th>
                            <th>Especialidade</th>
                            <th>Paciente</th>
                            <th>Tipo</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {consultas.map((consulta) => (
                            <tr className={styles.linhaCorpo} key={consulta.id}>
                                <td>{consulta.id}</td>
                                <td>{consulta.medico}</td>
                                <td>{consulta.especialidade}</td>
                                <td>{consulta.paciente}</td>
                                <td>{consulta.tipo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

