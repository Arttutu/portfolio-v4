
import BotaoCard from "../BotaoCard"
import { CardProps } from "../Compartilhado/interface/icard"
export default function Card({ img, titulo, descricao, site, codigo, tech }:CardProps) {
  return (
    <div className="  w-72 sm:w-96  flex flex-col gap-8 items-center pb-4 ">
      <img src={img} alt={titulo} className="w-full h-auto "></img>
      <div className="flex flex-col px-2 gap-4 ">
        <h1 className="text-white font-bold text-2xl ">{titulo}</h1>
        <p className="text-gray-400 text-base">{descricao}</p>
        <h2 className="text-white  text-left font-semibold">Tecnologias</h2>
        <span className="text-green-400  text-left">{tech}</span>
        <div className=" w-full flex justify-start gap-8 items-center">
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