import Link from "next/link"
import style from "./Header.module.css"

export default function Header() {
    return (
        <header className={style.cabeca}>
            <nav className={style.navegador}>
                <ul className={style.listaUl}>
                    <li className={style.opicaoLista}>
                        <Link href='/' className={style.opcaoLink}>Home</Link>
                    </li>
                    <li className={style.opicaoLista}>
                        <Link href='/sobre' className={style.opcaoLink}>Sobre</Link>
                    </li>
                    <li className={style.opicaoLista}>
                        <Link href='/contato' className={style.opcaoLink}>Contato</Link>
                    </li>
                    <li className={style.opicaoLista}>
                        <Link href='/efeitos' className={style.opcaoLink}>Efeitos</Link>
                    </li>
                    <li className={style.opicaoLista}> 
                        <Link href='/paginaApi' className={style.opcaoLink}>Api estados</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}