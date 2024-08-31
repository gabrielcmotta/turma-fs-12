import express, { Express, Request, Response, Router } from "express";
import { usuarios } from "./usuarios";

const app: Express = express();
app.use(express.json())

app.get("/usuarios", (req: Request, res: Response) => {
  res.send(usuarios).json();
});

app.get("/usuarios/:id", (req: Request, res: Response) => {
    const { id } = req.params

    const resultado = usuarios.filter(user => user.id == id)

    if (resultado.length == 0) {
      return res.status(404)
        .send({ error: "Usuário não encontrado"})
        .json()
    }

    res.send(resultado[0]).json()
})

type UsuarioRequestDTO = {
  name: string
  email: string
}

app.post("/usuarios", (req: Request, res: Response) => {
  const dados: UsuarioRequestDTO = req.body

  const novoUsuario = {
    ...dados,
    id: Math.random().toString()
  }

  usuarios.push(novoUsuario)

  res
    .status(201)
    .send(novoUsuario)
    .json()
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
