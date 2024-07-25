import React from 'react';
import BotaoContato from '../BotaoContato';
import { motion } from 'framer-motion';

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
      duration: 1
    }
  }
};

export default function Sobre() {
  return (
    <section className='container mx-auto flex flex-col mt-32'>
      <div className='flex flex-col '>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerAnimation}
          className='flex justify-end font-bold sm:text-9xl text-4xl dark:text-white'
        >
          {'Arthur'.split('').map((letra, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letra}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          className='flex justify-end font-bold sm:text-9xl text-4xl dark:text-white mr-5 sm:mr-16'
        >
          {'Gomes'.split('').map((letra, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letra}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className='flex flex-col ga-4 sm:w-1/2 w-full mt-24'>
        <p className='sm:items-start text-xl dark:text-white'>
          Atualmente cursando Análise e Desenvolvimento de Sistemas na FIAP, com habilidades em desenvolvimento web, JavaScript, CSS, React.js, Next.js. Busco desafios e oportunidades para aplicar meu conhecimento em projetos inovadores, colaborando com equipes talentosas para alcançar novos patamares na tecnologia. Sou comprometido, apaixonado e sempre em busca de aprendizado, pronto para contribuir com o sucesso de projetos e equipes de desenvolvimento. Vamos codar juntos!
        </p>
        <BotaoContato />
      </div>
    </section>
  );
}
