import React from "react"
import banner from "./logo_avatar.jpeg"
export default function Banner() {
  return (
    <img
      className="w-96 h-50 md:w-1/3 md:h-auto sm:w-1/2 bg-gray-400 rounded-lg "
      src={banner}
      alt="Minha foto pesssoal do Arthur"
    ></img>
  )
}
