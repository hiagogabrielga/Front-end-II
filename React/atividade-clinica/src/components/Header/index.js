'use client'
import React from "react"
import styles from "./header.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div className={styles.conteudoHeader}>
            <nav className={styles.navegacao}>
            <Image src={'/images/logoComNome.png'} width={150} height={75} alt="Logo da clínica"/>
            <ul className={styles.listaOpcoes}>
                <li className={styles.headerLi}>
                    <Link href="/" className={styles.opcaoHeader}>
                        Home
                    </Link>
                </li>
                <li className={styles.headerLi}>
                        <Link href="#" className={styles.opcaoHeader}>Médicos</Link>
                        <ul className={styles.headerSubmenu}>
                            <li className={styles.headerLi}>
                                <Link href="medicos" className={styles.opcaoHeader}>Listar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Adicionar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Editar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Excluir</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headerLi}>
                        <Link href="#" className={styles.opcaoHeader}>Pacientes</Link>
                        <ul className={styles.headerSubmenu}>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Listar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Adicionar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Editar</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Excluir</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headerLi}>
                        <Link href="#" className={styles.opcaoHeader}>Agendamento</Link>
                        <ul className={styles.headerSubmenu}>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Listar Consultas</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Agendar Consulta</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Editar Agendamento</Link>
                            </li>
                            <li className={styles.headerLi}>
                                <Link href="#" className={styles.opcaoHeader}>Cancelar</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}