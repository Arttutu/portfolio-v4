
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Componentes/Paginas/index.js";
import Habilidades from "./Componentes/Habilidades/index.js";

export default function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index  element ={<Index />} />
            <Route path="/sobre" element ={<Habilidades />}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}
