import { Routes, Route } from "react-router-dom";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./componentes/Home";
import Contacto from "./componentes/Contacto";
import NoFound from "./componentes/NoFound";
import Navegacion from "./componentes/Navegacion";

function App() {
  return (
    <>
      <Navegacion />
      <Routes>
        <Route path="/happy_cake" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NoFound />} />
      </Routes>
    </>
  );
}

export default App;
