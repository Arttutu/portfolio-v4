import React from "react"

export default function BotaoCard({ nome }) {
  return (
    <button className="text-white text-base font-bold transition-all hover:text-green-400 hover:underline">
      {nome}
    </button>
  )
}
