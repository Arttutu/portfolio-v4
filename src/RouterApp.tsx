
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Paginas";
import SobrePagina from "./Paginas/sobre";



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
