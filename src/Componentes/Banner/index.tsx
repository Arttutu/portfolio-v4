
import { BannerProps } from "../Compartilhado/interface/ibanner"

export default function Banner({enderecoImagem, textoAlternativo}:BannerProps) {
  return (
    <img
      className="w-full h-50 sm:w-[745px] sm:h-[350px] bg-gray-400 "
      src={enderecoImagem}
      alt={textoAlternativo}
    ></img>
  )
}
