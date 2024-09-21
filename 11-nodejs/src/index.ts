import express, { Express, Request, Response, Router } from "express";
import { usuarios } from "./usuarios";
import usuarioRoutes from "./routes/usuarioRoutes";

const app: Express = express();
app.use(express.json());
app.use(usuarioRoutes);

type UsuarioRequestDTO = {
  name: string
  email: string
}

app.post("/usuarios", (req: Request, res: Response) => {
  const dados: UsuarioRequestDTO = req.body

  if (!dados.email) {
    return res.status(422)
        .send({ error: "O campo email é obrigatório!"})
        .json()
  }

  if (!dados.name) {
    return res.status(422)
        .send({ error: "O campo nome é obrigatório!"})
        .json()
  }

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

app.put("/usuarios/:id", (req: Request, res: Response) => {
  const { id } = req.body;
  const dados: UsuarioRequestDTO = req.body

  if (!dados.email) {
    return res.status(422)
        .send({ error: "O campo email é obrigatório!"})
        .json()
  }

  if (!dados.name) {
    return res.status(422)
        .send({ error: "O campo nome é obrigatório!"})
        .json()
  }

  const indiceUsuario = usuarios.findIndex(user => user.id == id)

  if (indiceUsuario < 0) {
    return res.status(404)
        .send({ error: "Usuário não encontrado"})
        .json()
  }

  usuarios[indiceUsuario] = {
    ...usuarios[indiceUsuario],
    name: dados.name,
    email: dados.email
  }

  res.send(usuarios[indiceUsuario]).json()
})

app.delete("/usuarios/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const indiceUsuario = usuarios.findIndex(user => user.id == id)

  if (indiceUsuario < 0) {
    return res.status(404)
        .send({ error: "Usuário não encontrado"})
        .json()
  }

  usuarios.splice(indiceUsuario, 1)

  res.send({ message: "Excluído com sucesso!"}).json()
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
