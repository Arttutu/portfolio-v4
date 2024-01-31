import React from "react"
import banner from "./logo-avatar.png"
export default function Banner() {
  return (
    <img
      className="w-80  sm:w-96 sm:h-auto bg-gray-400 rounded-lg "
      src={banner}
      alt="Minha foto pesssoal"
    ></img>
  )
}
