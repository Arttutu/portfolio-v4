import React from "react";

export default function Navegacao() {
  return (
    <nav className="flex justify-center pt-5">
      <section className="container flex  items-center gap-3 flex-col sm:flex-row sm:justify-between">
        <h1 className="text-white text-2xl sm:text-3xl ">arthurgomes</h1>
        <div className="flex gap-5">
          <img src="./assets/img/github.svg" />
          <img src="./assets/img/linkedin.svg" />
        </div>
      </section>
    </nav>
  );
}
