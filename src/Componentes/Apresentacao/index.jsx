import React from "react"

export default function Apresentacao() {
  return (
    <section className="container mt-32 mx-auto">
      <article className="flex flex-col items-center text-center sm:text-start w-100  sm:w-3/5 sm:items-start">
        <h1 className=" text-white text-7xl font-semibold  after:content-['Arthur.'] after:text-7xl after:px-5">
          Prazer em conhecer você ! eu sou
        </h1>
        <p className=" text-gray-400 text-lg mt-2">
          minha descrição minha descrição minha descrição
        </p>
        <a href="">
          <button className="text-white font-bold mt-4">Contato</button>
          <div className="w-16 h-1 bg-green-400"></div>
        </a>
      </article>
      <div className="w-100  sm:w-auto h-1 bg-zinc-500 mt-32 sm-mx-auto box-content"></div>
    </section>
  )
}
