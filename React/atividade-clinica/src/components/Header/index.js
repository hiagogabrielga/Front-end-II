'use client'
import React from "react"
import styles from "./header.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <div className={styles.conteudoHeader}>
            <nav className={styles.navegacao}>
                <div className={styles.imagemLogo}>
                <Image src={'/images/logo.png'} width={70} height={70} alt="Logo da clínica" className={styles.logo}/>
                </div>
            
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
                                <Link href="medicos" className={styles.opcaoHeader}>Listar médicos</Link>
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
                                <Link href="pacientes" className={styles.opcaoHeader}>Listar pacientes</Link>
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
                                <Link href="consultas" className={styles.opcaoHeader}>Listar Consultas</Link>
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