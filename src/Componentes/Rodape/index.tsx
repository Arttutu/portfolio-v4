import React from "react"
import Formulario from "../Formulario"
import { TemaBotao } from "../TemaBotao/TemaBotao"
import { SiGithub } from "react-icons/si"
import { Linkedin, MessageCircle } from "lucide-react"

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
      <nav className="flex justify-center pt-5 ">
      <section className="container flex  items-center gap-3 flex-col sm:flex-row sm:justify-between">
        <h1 className="text-white text-2xl sm:text-3xl  ">arthurgomes</h1>

        <div className="flex gap-5 relative z-20 items-center">
          <TemaBotao />
          <a
            className="text-white   text-2xl hover:text-green-400 transition-all "
            href="https://github.com/Arttutu"
            target="_blank"
          >
            <SiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/santos-gomes/"
            target="_blank"
            className="text-white  hover:text-green-400 transition-all"
          >
            <Linkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5511957243215"
            target="_blank"
            className="text-white  hover:text-green-400 transition-all"  
          >
            <MessageCircle />
          </a>
        </div>
      </section>
    </nav>
  )
    </>
  )
}
