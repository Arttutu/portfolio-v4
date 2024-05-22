import { Linkedin, MessageCircle } from "lucide-react"
import { SiGithub } from "react-icons/si"
import { TemaBotao } from "../TemaBotao/TemaBotao"
export default function Redes() {
  return (
    <nav className="flex justify-center pt-5 ">
      <header className="container flex  items-center gap-3 flex-col sm:flex-row sm:justify-between">
        <h1 className="dark:text-white text-2xl sm:text-3xl text-black font-extrabold  ">arthurgomes</h1>
        <h1  className="dark:text-secundaria text-2xl sm:text-2xl text-black font-extrabold "> Desenvolvedor Front-end</h1>
   
          <div className="flex gap-2 relative z-20 items-center">
            <TemaBotao /> 
            <span className=" text-black text-2xl dark:text-secundaria font-extrabold  ">//</span>
            <a
              className="dark:text-white  text-black text-2xl  dark:hover:text-green-400 hover:text-green-400 transition-all "
              href="https://github.com/Arttutu"
              target="_blank"
            >
              <SiGithub />
            </a>
          <span className=" text-black text-2xl dark:text-secundaria font-extrabold"  >//</span>
            <a
              href="https://www.linkedin.com/in/santos-gomes/"
              target="_blank"
              className="dark:text-white text-black  dark:hover:text-green-400 hover:text-green-400 transition-all"
            >
              <Linkedin />
            </a>
            <span className=" text-black text-2xl dark:text-secundaria font-extrabold"  >//</span>
            <a
              href="https://api.whatsapp.com/send/?phone=5511957243215"
              target="_blank"
              className="dark:text-white text-black  dark:hover:text-green-400 hover:text-green-400 transition-all"  
            >
              <MessageCircle />
            </a>
          </div>
    
      </header>
    </nav>
  )
}
