import React from "react";

export default function Apresentacao() {
  return (
    <section className=" flex justify-center">
      <article className="container flex flex-col">
        <h1 className=" text-white text-7xl after:content-['arthur gomes'] after:text-7xl after:flex after:text-white after:underline">
          Prazer em conhecer você eu sou
        </h1>
        <p className=" text-gray-400 text-lg">
          minha descrição minha descrição minha descrição
        </p>
        <button>Contato</button>
      </article>
      <img></img>
    </section>
  );
}
