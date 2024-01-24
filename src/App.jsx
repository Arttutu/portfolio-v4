import Apresentacao from "./Componentes/Apresentacao";
import Navegacao from "./Componentes/Navegacao";

export default function App() {
  return (
    <main className="bg-stone-950 h-screen font-body">
      <Navegacao />
      <Apresentacao />
    </main>
  );
}
