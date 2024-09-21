import { Request, Response, Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { usuarios } from "../usuarios";

const usuarioRoutes = Router();
const usuarioController = new UsuarioController();

usuarioRoutes.get("/usuarios", usuarioController.getUsuarios);
usuarioRoutes.get("/usuarios/:id", usuarioController.getUsuario);

export default usuarioRoutes;