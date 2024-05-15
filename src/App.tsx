import Apresentacao from "./Componentes/Apresentacao/index.js";
import Habilidades from "./Componentes/Habilidades/index.js";
import Redes from "./Componentes/Redes/index.js";
import Projetos from "./Componentes/Projetos/index.js";
import Rodape from "./Componentes/Rodape/index.js";

export default function App() {
  return (
    <>
      <main className="dark:bg-stone-950 bg-stone-200 w-full h-auto px-8  py-8 font-body">
        <Redes />
        <Apresentacao />
        <Habilidades />
        <Projetos />
      </main>
      <footer id="contato" className="py-8 w-full h-auto bg-gray-900 px-4">
        <Rodape />
      </footer>
    </>
  );
}
