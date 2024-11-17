'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import style from "./Header.module.css"
import Link from "next/link"

export default function Header() {

    const [showDiv, setShowDiv] = useState(false)
    return (
        <header className={style.headerAtividade}>
            <div className={style.campo}>      
                <button className={style.botao} onClick={() => { setShowDiv(!showDiv) }} > {showDiv ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" /></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" /></svg>}</button>
                <h1 className={style.titulo}>Atividade <strong>cabeçalho</strong></h1>
            </div>  
            <AnimatePresence>
            {showDiv &&
                (
                    <motion.nav
                        key="nav-atividade"
                        initial={{ opacity: 0, y: -70 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 1, y: -70 }}
                        transition={{ duration: 0.2}}
                        className={style.campoOpcaoNav}>
                        <div className={style.opcoesNav}>
                            <li className={style.opcao}>
                                <Link href={'/'}>pagina 1</Link>
                            </li>
                            <li className={style.opcao} >
                                <Link href={'./pagina2'}>pagina 2</Link>
                            </li >
                            <li className={style.opcao}>
                                <a href="https://wagnerferreiraf.github.io" target="_blank">Material de apoio</a>
                            </li>
                        </div>

                    </motion.nav>
                )
            }
            </AnimatePresence>
        
        </header>
        
    )
}