import BotaoContato from "../BotaoContato";
import itens from "./projetos.json";
import Card from "../Card";
import { SiGithub } from "react-icons/si";
import { motion } from 'framer-motion';
export default function Projetos() {
  return (
    <section id="projeto" className="container flex flex-col mt-32 mx-auto">
     
        <h3 className="dark:text-white text-black text-3xl sm:text-7xl m-32 flex items-end justify-center font-bold">Projetos</h3>
        
     
      <div className="flex flex-col gap-8  sm:gap-52">
        {itens.map((item, index) => (
          <motion.div   initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} transition={{ duration: 1, ease: "easeIn" }}>
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
          </motion.div>
        ))}
      </div>
      <a href="https://github.com/Arttutu" target="_blank">
        <button className="dark:text-white text-black flex gap-4 items-center font-bold text-xl sm:text-3xl mx-auto my-32 dark:hover:text-secundaria hover:text-secundaria transition-all">
          Veja mais projetos 
          <SiGithub />
        </button>
      </a>
    </section>
  );
}
