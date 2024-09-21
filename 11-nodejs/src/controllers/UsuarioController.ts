import { Request, Response } from "express";
import { usuarios } from "../usuarios";

export class UsuarioController {
    async getUsuarios(req: Request, res: Response) {
        return res.send(usuarios).json();
    }

    async getUsuario(req: Request, res: Response) {
        const { id } = req.params
    
        const resultado = usuarios.filter(user => user.id == id)
    
        if (resultado.length == 0) {
          return res.status(404)
            .send({ error: "Usuário não encontrado"})
            .json()
        }
    
        return res.send(resultado[0]).json()
    }
}