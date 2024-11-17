'use client'
import { useState } from "react";
import style from "./Header.module.css"
import Link from "next/link"

export default function Header() {

    const [showDiv, setShowDiv] = useState(true)
    return (
        <header className={style.headerAtividade}>
            <div className={style.campo}>
                <button className={style.botao} onClick={() => { setShowDiv(!showDiv) }} > {showDiv ? <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>}</button>
            </div>
            <nav className={style.campoOpcaoNav}>
                {showDiv &&
                    (
                        <div>
                            <li>
                                <Link href={'/'}>pagina 1</Link>
                            </li>
                            <li>
                                <Link href={'./pagina2'}>pagina 2</Link>
                            </li>
                            <li>
                                <a href="https://wagnerferreiraf.github.io" target="_blank">Material de apoio</a>
                            </li>
                        </div>
                    )
                }
            </nav>
        </header>
    )
}