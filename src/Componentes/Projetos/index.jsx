import React from "react"
import BotaoContato from "../BotaoContato"
import itens from "./projetos.json"
import Card from "../Card"

export default function Projetos() {
  return (
    <section className="container flex flex-col mt-32 mx-auto">
      <div className=" w-full flex flex-row mx-auto  items-center justify-between mb-32">
        <h3 className="text-white text-4xl text- sm:text-7xl">
          Principais projetos.
        </h3>
        <BotaoContato />
      </div>
      <div className="mx-auto gap-12 flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 ">
        {itens.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            titulo={item.titulo}
            descricao={item.descricao}
            site={item.deploy}
            codigo={item.codigo}
          />
        ))}
      </div>
    </section>
  )
}
