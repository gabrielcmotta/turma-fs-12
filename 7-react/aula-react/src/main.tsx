import ReactDOM from "react-dom/client";

import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usuarios from "./pages/Usuarios";
import NavBar from "./components/NavBar";
import { UsuarioProvider } from "./contexts/UsuarioProvider";
import { Home } from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <UsuarioProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </UsuarioProvider>
  </BrowserRouter>
);
