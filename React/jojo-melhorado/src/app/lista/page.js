import Image from "next/image";

export default function Lista() {
    const listaParts = [
        {
            id: 1,
            nome_da_parte: "Phantom Blood",
            personagem_principal: "Jonathan Joestar",
            antagonista: "Dio Brando",
            data_de_lancamento: "1987",
            imagem_primeiro_volume: "/images/primeiro-volume-parte-um.jpeg",
            imagem_ultimo_volume: "/images/ultimo-volume-parte-um.jpeg"
        },
        {
            id: 2,
            nome_da_parte: "Battle Tendency",
            personagem_principal: "Joseph Joestar",
            antagonista: "Kars",
            data_de_lancamento: "1988",
            imagem_primeiro_volume: "/images/primeiro-volume-parte-dois.jpg",
            imagem_ultimo_volume: "/images/ultimo-volume-parte-dois.jpg"
        },
        {
            id: 3,
            nome_da_parte: "Stardust Crusaders",
            personagem_principal: "Jotaro Kujo",
            antagonista: "DIO",
            data_de_lancamento: "1989",
            imagem_primeiro_volume: "/images/primeiro-volume-parte-tres.png",
            imagem_ultimo_volume: "/images/ultimo-volume-parte-tres.png"
        },
        {
            id: 4,
            nome_da_parte: "Diamond is Unbreakable",
            personagem_principal: "Josuke Higashikata",
            antagonista: "Yoshikage Kira",
            data_de_lancamento: "1992",
            imagem_primeiro_volume: "/images/primeiro-volume-parte-quatro.jpg",
            imagem_ultimo_volume: "/images/ultimo-volume-parte-quatro.jpg"
        },
        {
            id: 5,
            nome_da_parte: "Vento Aureo",
            personagem_principal: "Giorno Giovanna",
            antagonista: "Diavolo",
            data_de_lancamento: "1995",
            imagem_primeiro_volume: "/images/primeiro-volume-parte-cinco.jpg",
            imagem_ultimo_volume: "/images/ultimo-volume-parte-cinco.jpg"
        },
        {
            id: 6,
            nome_da_parte: "Stone Ocean",
            personagem_principal: "Jolyne Cujoh",
            antagonista: "Enrico Pucci",
            data_de_lancamento: "2000",
            imagem_primeiro_volume: "/images/primeiro-volume-parte-seis.jpg",
            imagem_ultimo_volume: "none"
        },
        {
            id: 7,
            nome_da_parte: "Steel Ball Run",
            personagem_principal: "Johnny Joestar",
            antagonista: "Funny Valentine",
            data_de_lancamento: "2004",
            imagem_primeiro_volume: undefined,
            imagem_ultimo_volume: "none"
        },
        {
            id: 8,
            nome_da_parte: "JoJolion",
            personagem_principal: "Josuke Higashikata",
            antagonista: "Tooru",
            data_de_lancamento: "2011",
            imagem_primeiro_volume: undefined,
            imagem_ultimo_volume: "none"
        },
        {
            id: 9,
            nome_da_parte: "The JOJOLands",
            personagem_principal: "Jodio Joestar",
            antagonista: "???",
            data_de_lancamento: "2023",
            imagem_primeiro_volume: undefined,
            imagem_ultimo_volume: "none"
        }
    ]
    return (
        <div>
            <h2>Listas</h2>
            <ul>
                {listaParts.map((parte, i) => (
                    <div>
                        <li key={i}>{parte.nome_da_parte}</li>
                    
                    <Image key={'imagem'+i} src={parte.imagem_primeiro_volume ? `${parte.imagem_primeiro_volume}` : undefined} height={150} width={140} alt={"Image do primeiro volume da parte" + parte.nome_da_parte}></Image>
                    </div>

                ))}
            </ul>
        </div>
    );
}