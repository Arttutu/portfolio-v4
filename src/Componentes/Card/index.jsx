import React from "react"
import BotaoCard from "../BotaoCard"

export default function Card({ img, titulo, descricao, site, codigo }) {
  return (
    <div className="w-96  flex flex-col gap-8 items-center border  rounded-md shadow-sm shadow-gray-700">
      <img src={img} alt={titulo} className="w-full h-52 rounded-md"></img>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-white font-bold text-2xl">{titulo}</h1>
        <p className="text-gray-400 text-base text-center">{descricao}</p>
        <div></div>
        <div className=" w-full flex justify-around items-center">
          <a href={site} target="_blank">
            <BotaoCard nome="site" />
          </a>
          <a href={codigo} target="_blank">
            <BotaoCard nome="codigo" />
          </a>
        </div>
      </div>
    </div>
  )
}
