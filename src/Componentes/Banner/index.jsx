import React from "react"
import banner from "./logo-avatar.png"
export default function Banner() {
  return (
    <img
      className="w-96 h-96 sm:w-80 sm:h-80 bg-gray-400 rounded-sm "
      src={banner}
      alt="Minha foto pesssoal"
    ></img>
  )
}
