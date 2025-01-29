'use client'
import { useEffect, useState } from "react";

export default function Efeitos() {

    const [ufs, setUfs] = useState([])
    const [ufSelecionada, setUfSelecionada] = useState('')
    const [cidades, setCidades] = useState([])
    const [cidadeSelecionada, setCidadeSelecionada] = useState('')

    const getUfs = async () => {
        try {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }

            const data = await response.json();
            setUfs(data)

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    const getCidades = async () => {
        try {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelecionada}/municipios?orderBy=nome`)
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);

            }

            const data = await response.json();
            setCidades(data)

        } catch (error) {
            console.log('Ocorreu algum erro:' + error)
        }
    }

    useEffect(() => {
        getUfs();
    }, [])

    useEffect(() => {
        getCidades();
    }, [ufSelecionada])

    return (
        <div>
            <h1>Api dos estados</h1>
            <div>
                <select onChange={(e) => setUfSelecionada(e.target.value)}>
                    <option value="">Selecione o estado</option>
                    {
                        ufs.map(uf => (
                            <option
                                value={uf.id}
                                key={uf.id}>
                                {uf.nome}
                            </option>
                        )
                        )
                    }
                </select>
            </div>
            <div>
                <select onChange={(e) => setCidadeSelecionada(e.target.value)}>
                    <option value="">Selecione o municipio</option>
                    {
                        cidades.map(
                            cidade => (
                                <option value={cidade.id} key={cidade.id}>{cidade.nome}</option>
                            )
                        )
                    }
                </select>
            </div>
        </div>
    )
}