import React from "react"
import {
  SiVite,
  SiPreact,
  SiTailwindcss,
  SiGithub,
  SiFigma,
  SiJavascript,
  SiStyledcomponents,
  SiTypescript
} from "react-icons/si"
import { FaHtml5 } from "react-icons/fa"
export default function Habilidades() {
  return (
    <section className="container flex mx-auto  mt-16 sm:mt-32">
      <div className=" md:grid md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-3 lg:gap-16 items-center flex flex-col mx-auto  gap-8 ">
        <div className="items-center flex flex-row gap-8">
          <h2 className="text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">React</h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <SiPreact />
          </div>
        </div>
        <div className=" items-center flex flex-row gap-8">
          <h2 className=" text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">
            JavaScript
          </h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <SiJavascript />
          </div>
        </div>
        <div className=" items-center flex flex-row gap-8">
          <h2 className=" text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">
          TypeScript
          </h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <SiTypescript />
          </div>
        </div>
        
        <div className="  items-center flex flex-row gap-8">
          <h2 className=" text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">
            Tailwind
          </h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <SiTailwindcss />
          </div>
        </div>
        <div className=" items-center flex flex-row gap-8">
          <h2 className=" text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">Vite</h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <SiVite />
          </div>
        </div>
        <div className=" items-center flex flex-row gap-8">
          <h2 className=" text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">Figma</h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <SiFigma />
          </div>
        </div>
        <div className=" items-center flex flex-row gap-8">
          <h2 className=" text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">HTMl</h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <FaHtml5 />
          </div>
        </div>
        <div className=" items-center flex flex-row gap-8 ">
          <h2 className=" text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">Github</h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <SiGithub />
          </div>
        </div>
        <div className=" items-center flex flex-row gap-8">
          <h2 className=" text-3xl sm:text-5xl dark:text-gray-400 text-black font-bold">Styled</h2>
          <div className="dark:text-white text-black text-3xl sm:text-5xl">
            <SiStyledcomponents />
          </div>
        </div>
      </div>
    </section>
  )
}
