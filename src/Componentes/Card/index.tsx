import BotaoCard from "../BotaoCard";
import { CardProps } from "../Compartilhado/interface/icard";

interface CardPropsWithReverse extends CardProps {
  reverse: boolean;
}

export default function Card({ img, titulo, descricao, site, codigo, tech, reverse }: CardPropsWithReverse) {
  return (
    <div className={`flex flex-col gap-12 md:flex md:items-center md:pb-4 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <img src={img} alt={titulo} className="w-full md:w-1/2 h-auto" />
      <div className="flex flex-col justify-center items-start p-4 gap-4 w-full md:w-1/2">
        <div>
          <h1 className="dark:text-white text-black font-extrabold text-2xl">{titulo}</h1>
          <h2 className="dark:text-white text-black text-left font-semibold">Tecnologias</h2>
          <span className="dark:text-white text-secundaria text-left">{tech}</span>
        </div>
        <div className="flex flex-col gap-4">
          <p className="dark:text-gray-400 text-gray-950 text-base">{descricao}</p>
          <div className="w-full flex justify-start gap-8 items-center">
            <a href={site} target="_blank" rel="noopener noreferrer">
              <BotaoCard nome="site" />
            </a>
            <a href={codigo} target="_blank" rel="noopener noreferrer">
              <BotaoCard nome="codigo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
