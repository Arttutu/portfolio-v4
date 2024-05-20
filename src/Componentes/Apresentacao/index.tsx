import React from "react";
import BotaoContato from "../BotaoContato";
import Banner from "../Banner";
import BotaoProjeto from "../BotaoProjeto";
import foto from "./logo.png";
import { FiArrowDown } from "react-icons/fi";
import { motion } from 'framer-motion';

export default function Apresentacao() {
  return (
    <section className="container mt-14 sm:mt-32 mx-auto">
      <div className="  sm:flex sm:flex-col flex flex-col gap-8">
        <article className=" w-full sm:flex sm:flex-col sm:w-1/2  ">
        <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className="text-center sm:text-left dark:text-white text-black text-2xl  sm:text-8xl font-semibold">
              Paixão pelo desenvolvimento de software
          </h1> 
        </motion.h1>
        </article>
        <div className=" flex flex-col-reverse items-center gap-8 sm:flex sm:flex-row sm:items-end sm:justify-between ">
          <FiArrowDown className=" sm:text-secundaria sm:block text-4xl sm:text-8xl font-semibold hidden"></FiArrowDown>
          <Banner
            textoAlternativo=" foto do criador do site o nome dele é arthur"
            enderecoImagem={foto}
          
          />
        </div>    
      </div>
    
    </section>
  );
}
