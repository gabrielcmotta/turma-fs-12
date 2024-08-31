import express, { Express, Request, Response } from "express";
import { usuarios } from "./usuarios";

const app: Express = express();
app.use(express.json())

app.get("/usuarios", (req: Request, res: Response) => {
  res.send(usuarios).json();
});

app.get("/usuarios/:id", (req: Request, res: Response) => {
  const { id } = req.params

  const resultado = usuarios.filter(user => user.id == Number(id))

  if (resultado.length == 0) {
    return res.status(404)
    .send({ error: "Usuário não encontrado"})
    .json() 
  }

  res.send(resultado[0]).json()
});

type UsuarioRequestDTO = {
  name: string
  email: string
}

app.post("/usuarios", (req: Request, res: Response) => {
  const dados: UsuarioRequestDTO = req.body

  const novoUsuario = {
    ...dados,
    id: Math.random()
  }

  usuarios.push(novoUsuario)

  res
    .status(201)
    .send(novoUsuario)
    .json()

});


app.put("/usuarios/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email }: UsuarioRequestDTO = req.body;

  const usuarioIndex = usuarios.findIndex(user => user.id == Number(id));

  if (usuarioIndex === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  usuarios[usuarioIndex] = { ...usuarios[usuarioIndex], name, email };

  res.json(usuarios[usuarioIndex]);
});

app.delete("/usuarios/:id", (req: Request, res: Response) => {
  const { id } = req.params;

  const usuarioIndex = usuarios.findIndex(user => user.id == Number(id));

  if (usuarioIndex === -1) {
    return res.status(404).json({ error: "Usuário não encontrado" });
  }

  usuarios.splice(usuarioIndex, 1);

  res.status(204).send(); // Sem conteúdo, indicando que a operação foi bem-sucedida
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

