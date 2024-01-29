import Apresentacao from "./Componentes/Apresentacao"
import Banner from "./Componentes/Banner"
import Habilidades from "./Componentes/Habilidades"
import Navegacao from "./Componentes/Navegacao"
import Projetos from "./Componentes/Projetos"
import Rodape from "./Componentes/Rodape"

export default function App() {
  return (
    <>
      <main className="bg-stone-950 w-full h-auto px-8  py-8 font-body">
        <Navegacao />
        <Apresentacao />
        <Habilidades />
        <Projetos />
      </main>
      <footer className="py-8 w-full h-auto bg-gray-900 px-4">
        <Rodape />
        <Navegacao />
      </footer>
    </>
  )
}
