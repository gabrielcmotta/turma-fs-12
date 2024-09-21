import express, { Express } from "express";
import usuarioRoutes from "./routes/usuarioRoutes";

const app: Express = express();
app.use(express.json());
app.use(usuarioRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));