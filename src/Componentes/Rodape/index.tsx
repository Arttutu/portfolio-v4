import React from "react"
import Formulario from "../Formulario"

export default function Rodape() {
  return (
    <>
      <section className="container items-center flex flex-col gap-8 md:flex  mx-auto md:flex-row md:justify-around ">
        <div className="w-80 flex flex-col items-left gap-8 sm:w-96">
          <h3 className="text-white text-4xl  sm:text-7xl font-semibold text-center sm:text-left">
            Contato
          </h3>
          <p className="text-white text-base text-center sm:text-left">
            Por favor preencha o formulário e entrarei em contato com você o
            mais breve possível.
          </p>
        </div>
        <Formulario />
      </section>
      <div className=" container mx-auto w-100  sm:w-auto h-1 bg-zinc-500 mt-32 "></div>
    </>
  )
}
