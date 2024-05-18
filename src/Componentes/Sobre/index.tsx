import React from 'react'
import BotaoContato from '../BotaoContato'

export default function Sobre() {
  return (
    <section className='container mx-auto flex flex-col mt-32'>
        <div className='flex flex-col '>
        <h2 className='flex justify-end font-bold sm:text-9xl text-4xl  dark:text-white'>Arthur </h2>
        <h2 className='flex justify-end font-bold sm:text-9xl text-4xl  dark:text-white  mr-5 sm:mr-16'>Gomes </h2>
        </div>
      
        <div className='flex flex-col ga-4 sm:w-1/2 w-full mt-24'>
          <p className=' sm:items-start text-xl dark:text-white'>Atualmente cursando Análise e Desenvolvimento de Sistemas na FIAP, com habilidades em desenvolvimento web, JavaScript, CSS, React.js, e git obtidas por meio de cursos na Alura. Busco desafios e oportunidades para aplicar meu conhecimento em projetos inovadores, colaborando com equipes talentosas para alcançar novos patamares na tecnologia. Sou comprometido, apaixonado e sempre em busca de aprendizado, pronto para contribuir com o sucesso de projetos e equipes de desenvolvimento. Vamos codar juntos!</p>
          <BotaoContato />
        </div>
    </section>
  )
}
