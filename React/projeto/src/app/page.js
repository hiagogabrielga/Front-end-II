//import Image from "next/image";
import styles from "./page.module.css";//Estilos deste arquivo.
import Image from "next/image";

export default function Home() {
  var user = "Hiago"
  return (
    <div>
        <h1>Página principal</h1>
        <p>Olá mundo</p>
        <p>Usúario: {user}</p>
        <Image className={styles.imagem} src="/images/he-man.png" alt="Imagem do He man" width={600} height={600}></Image>
        <button><a href="./sobre">pagina 2</a></button>
    </div>
  );
}
