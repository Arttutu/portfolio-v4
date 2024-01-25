import React from "react"
import banner from "./banner.png"
export default function Banner() {
  return (
    <div className="z-10 abolute top-0 mr-48">
      <img
        className="w-96 h-auto bg-gray-600"
        src={banner}
        alt="Minha foto pesssoal"
      ></img>
    </div>
  )
}
