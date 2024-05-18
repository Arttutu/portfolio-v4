import BotaoContato from "../BotaoContato";
import itens from "./projetos.json";
import Card from "../Card";
import { SiGithub } from "react-icons/si";

export default function Projetos() {
  return (
    <section id="projeto" className="container flex flex-col mt-32 mx-auto">
     
        <h3 className="dark:text-white text-black text-3xl sm:text-7xl m-32 flex items-end justify-center font-bold">Projetos</h3>
        
     
      <div className="flex flex-col  sm:gap-52">
        {itens.map((item, index) => (
          <Card
            key={item.id}
            img={item.img}
            titulo={item.titulo}
            descricao={item.descricao}
            site={item.deploy}
            codigo={item.codigo}
            tech={item.nomeTech}
            reverse={index % 2 !== 0} 
          />
        ))}
      </div>
      <a href="https://github.com/Arttutu" target="_blank">
        <button className="dark:text-white text-black flex gap-4 items-center font-bold text-xl sm:text-3xl mx-auto my-32 dark:hover:text-green-400 hover:text-green-400 transition-all">
          Veja mais projetos
          <SiGithub />
        </button>
      </a>
    </section>
  );
}
