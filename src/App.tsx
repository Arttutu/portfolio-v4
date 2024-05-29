import Apresentacao from "./Componentes/Apresentacao/index.js";
import Redes from "./Componentes/Redes/index.js";
import Projetos from "./Componentes/Projetos/index.js";
import Rodape from "./Componentes/Rodape/index.js";
import Sobre from "./Componentes/Sobre/index.js";

export default function App() {
  return (
    <>
      <main className="dark:bg-stone-950 bg-fundo w-full h-auto px-8  py-8 font-body">
        <Redes />
        <Apresentacao />
        <Sobre />
        <Projetos />
      </main>
      <Rodape />
    </>
  );
}
