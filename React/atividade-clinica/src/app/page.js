import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.containerHome}>
      <div className={styles.campoParagrafo}>
        <p>Bem-vindo à Vitalis Clínica Integrada, onde a sua saúde é a nossa prioridade! Aqui, unimos tecnologia e humanização para oferecer um atendimento de qualidade, garantindo que você tenha o cuidado que merece. Nossa equipe de profissionais está sempre pronta para ouvir, orientar e tratar cada paciente com dedicação. Afinal, saúde não é só ausência de doença, é bem-estar e qualidade de vida. Agende sua consulta e dê o primeiro passo para um futuro mais saudável!</p>
      </div>
    </div>

  );
}
