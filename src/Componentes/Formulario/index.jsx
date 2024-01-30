import React, { useState } from "react"
import emailjs from "@emailjs/browser"
export default function Formulario() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  function EnviarMensagem(e) {
    e.preventDefault()
    if (nome === "" || email === "" || mensagem === "") {
      alert("preencha todos os campos")
    }
    const templateParans = {
      from_name: nome,
      to_name: nome,
      message: mensagem,
      email: email,
    }
    emailjs
      .send(
        "service_6fbajdk",
        "template_koj7n4p",
        templateParans,
        "2N3izUoKx-truPj4t"
      )
      .then(
        (response) => {
          console.log("Email Enviado", response.status, response.text)
          setEmail("")
          setMensagem("")
          setNome("")
          alert("Email Enviado com Sucesso")
        },
        (error) => {
          console.log("erro", error)
          alert("Erro ao enviar")
        }
      )
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={EnviarMensagem}>
      <label className="text-gray-400 hidden">Nome</label>
      <input
        className=" w-80 sm:w-96 h-8 bg-gray-900 border-b-2 border-white text-white"
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
        value={nome}
      ></input>
      <label className="text-gray-400 hidden">Email</label>
      <input
        className="  w-80 sm:w-96 h-8 bg-gray-900 border-b-2 border-white text-white"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      ></input>
      <label className="text-gray-400 hidden">Mensagem</label>
      <textarea
        className=" w-80 sm:w-96 h-32 bg-gray-900 border-b-2 border-white text-white"
        type="text"
        placeholder="Mensagem"
        onChange={(e) => setMensagem(e.target.value)}
        value={mensagem}
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
  )
}
