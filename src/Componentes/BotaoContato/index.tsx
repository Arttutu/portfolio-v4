import React from "react"

export default function BotaoContato() {
  return (
    <a href="#contato">
      <button className="dark:text-white  dark:hover:text-secundaria text-black font-bold mt-4 hover:text-secundaria transition-all  ">
        Contato
      </button>
      <div className="w-16 h-1 mt-2 bg-secundaria"></div>
    </a>
  )
}
