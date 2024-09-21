import express, { Express, Request, Response, Router } from "express";
import { usuarios } from "./usuarios";
import usuarioRoutes from "./routes/usuarioRoutes";

const app: Express = express();
app.use(express.json());
app.use(usuarioRoutes);

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
