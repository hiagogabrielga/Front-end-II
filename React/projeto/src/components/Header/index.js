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
                </ul>
            </nav>
        </header>
    )
}