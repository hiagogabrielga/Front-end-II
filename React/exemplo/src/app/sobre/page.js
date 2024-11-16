'use client'
import { useState } from "react";

export default function sobre() {
    const [conteudo, setConteudo] = useState("bom dia")
    const [name, apresentaNome] = useState("")
    const [showDiv, setShowDiv] = useState(true)
    const controlarParagrafo = () => {
        setConteudo("boa tarde")
        console.log(conteudo)
    }

    const controlarInput = (evento) => {
        apresentaNome(evento.target.value)
    }
    return (
        <main>
            {/*<h1>{conteudo}</h1>
                <button onClick={controlarParagrafo}>Mudar</button>*/}

            <button onClick={() => { setShowDiv(!showDiv) }} > {showDiv ? 'Esconder' : 'Mostrar'}</button>

            {showDiv &&
                (
                    <div>
                        <p>Nome: {name}</p>
                        <input type="text" onChange={controlarInput} />
                    </div>
                )
            }

        </main>
    )
}