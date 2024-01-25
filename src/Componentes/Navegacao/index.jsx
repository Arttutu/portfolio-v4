import { Linkedin, MessageCircle } from "lucide-react"
import React from "react"
import Banner from "../Banner"

export default function Navegacao() {
  return (
    <nav className="flex justify-center pt-5">
      <section className="container flex  items-center gap-3 flex-col sm:flex-row sm:justify-between">
        <h1 className="text-white text-2xl sm:text-3xl ">arthurgomes</h1>

        <div className="flex gap-5 relative z-20">
          <a href="">
            <img src="./assets/img/github.svg" />
          </a>
          <a href="" className="text-white">
            <Linkedin />
          </a>
          <a href="" className="text-white">
            <MessageCircle />
          </a>
        </div>
      </section>
    </nav>
  )
}
