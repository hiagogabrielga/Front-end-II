//import Image from "next/image";
import styles from "./page.module.css";//Estilos deste arquivo.

export default function Home() {
  var user = "Hiago"
  return (
    <div>
        <h1>Olá mundo</h1>
        <p>Usúario: {user}</p>
    </div>
  );
}
