import React from "react"

export default function Rodape() {
  return (
    <>
      <section className="container mx-auto md:flex md:flex-row md:justify-around items-center flex-col gap-8">
        <div className="  w-80 sm:w-96  gap-8 flex items-left flex-col">
          <h3 className="text-white text-4xl  sm:text-7xl font-semibold  ">
            Contato
          </h3>
          <p className="text-white text-base text-left">
            Eu adoraria ouvir sobre seu projeto e como posso ajudar. Por favor
            preencha o formulário e entrarei em contato com você o mais breve
            possível.
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <label className="text-gray-400 hidden">Nome</label>
          <input
            className=" w-80 sm:w-96 h-8 bg-gray-900 border-b-2 border-white text-white"
            type="text"
            placeholder="Nome"
          ></input>
          <label className="text-gray-400 hidden">Email</label>
          <input
            className="  w-80 sm:w-96 h-8 bg-gray-900 border-b-2 border-white text-white"
            type="email"
            placeholder="Email"
          ></input>
          <label className="text-gray-400 hidden">Mensagem</label>
          <textarea
            className=" w-80 sm:w-96 h-32 bg-gray-900 border-b-2 border-white text-white"
            type="text"
            placeholder="Mensagem"
          ></textarea>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="text-white font-bold mt-4 hover:text-green-400 transition-all"
            >
              Enviar Mensagem
            </button>
            <div className="w-32 h-1 mt-2 bg-green-400"></div>
          </div>
        </form>
      </section>
      <div className=" container mx-auto w-100  sm:w-auto h-1 bg-zinc-500 mt-32 "></div>
    </>
  )
}
