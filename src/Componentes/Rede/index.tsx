
import { Linkedin, MessageCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { TemaBotao } from "../TemaBotao/TemaBotao";
export default function Rede() {
  return (
    <div className="flex gap-8 relative z-20 items-center">
      <TemaBotao />

      <a
        className="dark:text-white  text-black text-2xl  dark:hover:text-green-400 hover:text-green-400 transition-all "
        href="https://github.com/Arttutu"
        target="_blank"
      >
        <SiGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/santos-gomes/"
        target="_blank"
        className="dark:text-white text-black  dark:hover:text-green-400 hover:text-green-400 transition-all"
      >
        <Linkedin />
      </a>

      <a
        href="https://api.whatsapp.com/send/?phone=5511957243215"
        target="_blank"
        className="dark:text-white text-black  dark:hover:text-green-400 hover:text-green-400 transition-all"
      >
        <MessageCircle />
      </a>
    </div>
  );
}
