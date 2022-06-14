import { Router } from "express";
import {
  cadastrar,
  cadastro,
  catalogo,
  deletar,
  index,
  listar
} from "../controller/locacaoController.js";

const routes = Router();

routes.get("/", index);
routes.get("/catalogo", catalogo);
routes.get("/pesquisa/:id", listar);
routes.get("/deletar/:id", deletar);
routes.get("/cadastro", cadastro);

routes.post("/cadastrar", cadastrar);

export default routes;
