import Apresentacao from "../Componentes/Apresentacao";
import ContainerMain from "../Componentes/ContainerMain";
import Header from "../Componentes/Header";
import Projetos from "../Componentes/Projetos";
import Rodape from "../Componentes/Rodape";
import Sobre from "../Componentes/Sobre";



export default function Index() {
  return (
    <>
    <ContainerMain>
                <Header />
                <Apresentacao />
                <Sobre />
                <Projetos />
    </ContainerMain>
    <Rodape />
  </>
  )
}
