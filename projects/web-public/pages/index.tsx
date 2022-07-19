import { sum } from "@alura/utils/math/sum";
import { Text } from "@alura/desing-system/components/Text";

export default function HomeScreen() {
  return (
    <main>
      <Text tag={"h1"}>Home</Text>
      <Text tag="p">
        Importando módulo local: @alura/utils/math/sum sum(2, 2): {sum(2, 2)}
      </Text>
    </main>
  );
}
