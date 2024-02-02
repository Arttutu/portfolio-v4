import React from "react"
import Formulario from "../Formulario"

export default function Rodape() {
  return (
    <>
      <section className="container mx-auto md:flex md:flex-row md:justify-around items-center flex-col gap-8 ">
        <div className="  w-80 sm:w-96  gap-8 flex items-left flex-col">
          <h3 className="text-white text-4xl  sm:text-7xl font-semibold  ">
            Contato
          </h3>
          <p className="text-white text-base text-left">
            Eu adoraria ouvir sobre sua ideia e seus projetos. Por favor
            preencha o formulário e entrarei em contato com você o mais breve
            possível.
          </p>
        </div>
        <Formulario />
      </section>
      <div className=" container mx-auto w-100  sm:w-auto h-1 bg-zinc-500 mt-32 "></div>
    </>
  )
}
