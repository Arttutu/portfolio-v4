import React from "react"
import BotaoContato from "../BotaoContato"
import itens from "./projetos.json"
import Card from "../Card"

import { SiGithub } from "react-icons/si"
export default function Projetos() {
  return (
    <section id="projeto" className="container flex flex-col mt-32 mx-auto ">
      <div className=" w-full flex flex-row mx-auto  items-center justify-between mb-32">
        <h3 className="text-white text-3xl text- sm:text-7xl">projetos.</h3>
        <BotaoContato />
      </div>
      <div className="mx-auto  gap-12 flex flex-col xl:grid xl:grid-cols-3 xl:grid-rows-2 md:grid md:grid-cols-2 md:grid-rows-3 ">
        {itens.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            titulo={item.titulo}
            descricao={item.descricao}
            site={item.deploy}
            codigo={item.codigo}
            tech={item.nomeTech}
          />
        ))}
      </div>
      <a href="https://github.com/Arttutu" target="_blank">
        <button className="text-white flex gap-4 items-center font-bold text-xl sm:text-3xl  mx-auto my-32 hover:text-green-400 transition-all">
          Veja todos os meus projetos
          <SiGithub />
        </button>
      </a>
    </section>
  )
}
