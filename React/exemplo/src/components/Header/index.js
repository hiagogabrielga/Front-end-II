import Link from "next/link"

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href='/sobre'>Sei lá</Link>
                    </li>
                    <li>
                        <Link href='/contato'>Contato</Link>
                    </li>
                    <li>
                        <Link href='/efeitos'>efeitos</Link>
                    </li>
                    <li>
                        <Link href='/paginaApi'>Api</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}