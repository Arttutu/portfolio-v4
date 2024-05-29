
import Redes from '../Redes'
import Apresentacao from '../Apresentacao'
import Sobre from '../Sobre'
import Projetos from '../Projetos'
import Rodape from '../Rodape'
import ContainerMain from '../ContainerMain'

export default function Index() {
  return (
    <>

    <ContainerMain>
                <Redes />
                <Apresentacao />
                <Sobre />
                <Projetos />
    </ContainerMain>
    <Rodape />
  </>
  )
}
