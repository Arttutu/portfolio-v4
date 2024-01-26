import React from "react"
import BotaoContato from "../BotaoContato"

export default function Projetos() {
  return (
    <section className="container flex mt-32 mx-auto">
      <div className=" w-11/12 flex flex-row mx-auto justify-between">
        <h3 className="text-white text-7xl">Projetos</h3>
        <BotaoContato />
      </div>
      <div></div>
    </section>
  )
}
