import { Request, Response, Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();

usuarioRoutes.get("/usuarios", usuarioController.getUsuarios);
usuarioRoutes.get("/usuarios/:id", usuarioController.getUsuario);
usuarioRoutes.post("/usuarios", usuarioController.createUsuario);
usuarioRoutes.put("/usuarios/:id", usuarioController.updateUsuario);

export default usuarioRoutes;