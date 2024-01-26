import React from "react"
import BotaoContato from "../BotaoContato"

export default function Apresentacao() {
  return (
    <section className="container mt-32 mx-auto">
      <article className="flex flex-col items-center text-center sm:text-start w-100  sm:w-3/5 sm:items-start">
        <h1 className=" text-white text-4xl  sm:text-7xl font-semibold  after:content-['Arthur.'] after:sm:text-7xl after:text-4xl after:px-5 after:border-b-4 after:border-green-400">
          Prazer em conhecer você ! eu sou
        </h1>
        <p className=" text-gray-400  mt-10 text-base sm:text-lg ">
          minha descrição minha descrição minha descrição
        </p>
        <BotaoContato />
      </article>
      <div className="w-100  sm:w-auto h-1 bg-zinc-500 mt-32 "></div>
    </section>
  )
}
