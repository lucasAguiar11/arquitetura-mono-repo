import { sum } from "@alura/utils/math/sum";

export default function HomeScreen() {
  return (
    <main>
      <h1>home</h1>
      <p>
        Importando módulo local: @alura/utils/math/sum sum(2, 2): {sum(2, 2)}
      </p>
    </main>
  );
}
