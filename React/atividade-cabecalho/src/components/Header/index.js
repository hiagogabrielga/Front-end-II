'use client'
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import style from "./Header.module.css"
import Link from "next/link"

export default function Header() {

    const [selectedPage, setSelectedPage] = useState(null);
    const handleClick = (page) => {
        if (page == null) {
            page = "pagina1"
        }
        setSelectedPage(page);
    };

    const getStyle = (page) => {
        return {
            color: selectedPage === page ? "rgb(32, 196, 207)" : "",
            cursor: "pointer"
        };
    };

    const [showDiv, setShowDiv] = useState(false)
    return (
        <header className={style.headerAtividade}>
            <div className={style.campo}>
                <button className={style.botao} onClick={() => { setShowDiv(!showDiv) }} > {showDiv ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /></svg>}</button>
                <div className={style.logoEclass}>
                    <h1 className={style.titulo}>Atividade <strong>cabeçalho</strong></h1>
                    <Image
                        src="/images/logoPotfolio.png"
                        alt="Logo Portfolio"
                        width={50}
                        height={50}
                        loading="eager"
                    />
                </div>
            </div>
            <AnimatePresence>
                {showDiv &&
                    (
                        <motion.nav
                            key="nav-atividade"
                            initial={{ opacity: 0, y: -170 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 1, y: -170 }}
                            transition={{ duration: 0.2 }}
                            className={style.campoOpcaoNav}>
                            <div className={style.opcoesNav}>
                                <li className={style.opcao}>
                                    <Link href={'/'} id="pagina1" style={getStyle("pagina1")}
                                        onClick={() => handleClick("pagina1")}>pagina 1</Link>
                                </li>
                                <li className={style.opcao} >
                                    <Link href={'./pagina2'} style={getStyle("pagina2")}
                                        onClick={() => handleClick("pagina2")} id="pagina2">pagina 2</Link>
                                </li >
                                <li className={style.opcao}>
                                    <Link href={'./pagina3'} style={getStyle("pagina3")}
                                        onClick={() => handleClick("pagina3")} id="pagina3">pagina 3</Link>
                                </li>
                            </div>

                        </motion.nav>
                    )
                }
            </AnimatePresence>
        </header>

    )
}