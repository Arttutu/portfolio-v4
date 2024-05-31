
import Redes from '../Header'
import Apresentacao from '../Apresentacao'
import Sobre from '../Sobre'
import Projetos from '../Projetos'
import Rodape from '../Rodape'
import ContainerMain from '../ContainerMain'
import Header from '../Header'

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
