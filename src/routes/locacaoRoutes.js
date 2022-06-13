import { Router } from "express";
import {
  cadastrar,
  catalogo,
  deletar,
  index,
  listar,
} from "../controller/locacaoController.js";

const routes = Router();

routes.get("/", index);
routes.get("/catalogo", catalogo);
routes.get("/pesquisa", listar);
routes.get("/deletar/:id", deletar);

routes.post("/cadastrar", cadastrar);

export default routes;
