
import Banner from "../Banner";
import foto from "./logo.png";
import { FiArrowDown } from "react-icons/fi";
import { motion } from 'framer-motion';

export default function Apresentacao() {

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 2
      }
    }
  };
  return (
    <section className="container mt-24  sm:mt-32 mx-auto">
      <div className="  sm:flex sm:flex-col flex flex-col gap-8">
        <article className=" w-full sm:flex sm:flex-col sm:w-1/2  ">
        <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={containerAnimation}
            className="text-center sm:text-left dark:text-white text-black text-4xl  sm:text-8xl font-semibold"
        >
          {'Paixão pelo desenvolvimento de software'.split('').map((letra, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letra}
            </motion.span>
          ))}
            
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
