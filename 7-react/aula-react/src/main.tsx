import ReactDOM from "react-dom/client";

import "./app.scss";
import { BrowserRouter } from "react-router-dom";
import { UsuarioProvider } from "./contexts/UsuarioProvider";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <BrowserRouter>
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
  </BrowserRouter>
);
