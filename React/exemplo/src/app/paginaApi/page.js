'use client'
import { useEffect, useState } from "react";

export default function Efeitos(){
    const [cont, setCont] = useState(0);
    const [cont2, setCont2] = useState(0);

    const [ufs, setUfs] = useState([])

    useEffect(()=> {
        console.log("Renderizou")
    })

    const getUfs = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
                
            }

            const data = await response.json();
            setUfs(data)
            console.log(data)

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(()=> {
        getUfs();
    })

    return(
        <div>
            <h1>Api dos estados</h1>
            {
                /*<ul>
                    {
                        ufs.map(uf => (
                            <li key={uf.id}>{uf.nome}</li>
                        ))
                    }
                </ul>*/
                <select onChange={()=> setUfSelect(ev.target.value)}>
                    <option value="">Selecione o estado</option>
                    {
                        ufs.map(
                            uf => (
                                <option value={uf.id} key={uf.id}>{uf.nome}</option>
                            )
                        )
                    }
                </select>
            }
        </div>
    )
}