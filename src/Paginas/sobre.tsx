import { motion } from 'framer-motion';
import ContainerMain from '../Componentes/ContainerMain';
import Header from '../Componentes/Header';
import Habilidades from '../Componentes/Habilidades';
import Rodape from '../Componentes/Rodape';

export default function SobrePagina() {
  return (
    <>
        <ContainerMain>
        <Header />
        <section className='font-body flex flex-col gap-16 w-full  sm:w-1/2 mt-32'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className='flex flex-col'
        >  
          <h1 className=' text-4xl  sm:text-8xl font-semibold dark:text-white'>Arthur Gomes</h1>
          <h1 className=' text-4xl  sm:text-8xl font-semibold dark:text-white'> Santos</h1>
        
        </motion.div>
          
          
            <p className=' text-lg   font-semibold dark:text-white'>Atualmente cursando Análise e Desenvolvimento de Sistemas na FIAP, 
            com habilidades em desenvolvimento web, JavaScript, CSS, React.js, e git obtidas por meio de cursos na Alura. 
            Busco desafios e oportunidades para aplicar
            meu conhecimento em projetos inovadores, 
            colaborando com equipes talentosas para alcançar novos patamares na tecnologia.
            Sou comprometido, apaixonado e sempre em busca de aprendizado, 
            pronto para contribuir com o sucesso de projetos e equipes de desenvolvimento. Vamos codar juntos!
            </p>
        </section>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          >  
          <h2 className='text-4xl  sm:text-8xl font-semibold flex  items-end justify-end mt-20 dark:text-white'>Habilidades</h2>
        </motion.div>
      
        <Habilidades />
       </ContainerMain>
        <Rodape />
    
    </>

  )
}
