import Apresentacao from "./Componentes/Apresentacao"
import Banner from "./Componentes/Banner"
import Habilidades from "./Componentes/Habilidades"
import Navegacao from "./Componentes/Navegacao"
import Projetos from "./Componentes/Projetos"

export default function App() {
  return (
    <>
      <main className="bg-stone-950 h-auto font-body">
        <Navegacao />
        <Apresentacao />
        <Habilidades />
        <Projetos />
      </main>
      <footer></footer>
    </>
  )
}
