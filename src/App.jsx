import Apresentacao from "./Componentes/Apresentacao"
import Banner from "./Componentes/Banner"
import Habilidades from "./Componentes/Habilidades"
import Navegacao from "./Componentes/Navegacao"
import Projetos from "./Componentes/Projetos"

export default function App() {
  return (
    <>
      <main className="bg-stone-950 w-full h-auto  py-8 font-body">
        <Navegacao />
        <Apresentacao />
        <Habilidades />
        <Projetos />
      </main>
      <footer>area do fotter</footer>
    </>
  )
}
