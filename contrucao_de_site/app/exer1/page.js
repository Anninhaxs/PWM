import Image from "next/image";
import styles from "./ex1.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.frase}>
        <h1>Primeiro exercício de CSS</h1>
      </div>
    </main>
  );
}