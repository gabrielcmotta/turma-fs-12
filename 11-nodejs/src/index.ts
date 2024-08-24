import express, { Express, Request, Response } from "express";
import { usuarios } from "./usuarios";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send(usuarios).json();
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
