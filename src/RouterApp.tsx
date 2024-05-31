
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Componentes/Paginas/index.js";
import SobrePagina from "./Componentes/Paginas/sobre.js";


export default function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route index  element ={<Index />} />
            <Route path="/sobre" element ={< SobrePagina/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}
