import React from "react"
import BotaoContato from "../BotaoContato"
import Banner from "../Banner"

export default function Apresentacao() {
  return (
    <section className="container mt-32 mx-auto">
      <div className="sm:flex  sm:flex-row justify-around flex flex-col-reverse gap-8">
        <article className="flex flex-col items-center text-center sm:text-start w-100  sm:w-3/5 sm:items-start">
          <h1 className=" text-white text-4xl  sm:text-7xl font-semibold  after:content-['Arthur.'] after:sm:text-7xl after:text-4xl after:px-5 after:border-b-4 after:border-green-400">
            Prazer em conhecer você ! eu sou
          </h1>
          <p className=" text-gray-400  mt-10 text-base sm:text-lg ">
            Atualmente cursando Análise e Desenvolvimento de Sistemas na FIAP,
            com habilidades em desenvolvimento web, JavaScript, CSS, React.js, e
            git obtidas por meio de cursos na Alura. Busco desafios e
            oportunidades para aplicar meu conhecimento em projetos inovadores,
            colaborando com equipes talentosas para alcançar novos patamares na
            tecnologia. Sou comprometido, apaixonado e sempre em busca de
            aprendizado, pronto para contribuir com o sucesso de projetos e
            equipes de desenvolvimento. Vamos codar juntos!
          </p>
          <BotaoContato />
        </article>
        <Banner />
      </div>
      <div className="w-100  sm:w-auto h-1 bg-zinc-500 mt-32 "></div>
    </section>
  )
}
