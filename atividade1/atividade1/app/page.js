import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Atividades Web Mobile</h1>

      <ul>
        <li><Link href="/exer1">Exercício 1</Link></li>
        <li><Link href="/exer2">Exercício 2</Link></li>
        <li><Link href="/exer3">Exercício 3</Link></li>
        <li><Link href="/exer4">Exercício 4</Link></li>
      </ul>
    </main>
  );
}