import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.quadrado}>
        <h1>Exercícios </h1>

        <div className={styles.links}>
          <Link href="/ex1">Exercicio 1</Link>
          <Link href="/ex2">Exercicio 2</Link>
          <Link href="/ex3">Exercicio 3</Link>
          <Link href="/ex4">Exercicio 4</Link>
        </div>
      </div>
    </main>
  );
}