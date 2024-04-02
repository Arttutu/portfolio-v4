import React from "react"
interface BannerProps {
  enderecoImagem: string,
  textoAlternativo?: string
}

export default function Banner({enderecoImagem, textoAlternativo}:BannerProps) {
  return (
    <img
      className="w-96 h-50 md:w-1/3 md:h-auto sm:w-1/2 bg-gray-400 rounded-lg "
      src={enderecoImagem}
      alt={textoAlternativo}
    ></img>
  )
}
