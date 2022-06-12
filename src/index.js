import "dotenv/config";
import express from "express";
import Locacao from "./model/locacaoModel.js";

const app = express();
const port = process.env.PORT || 5000;

const db = async () => {
  await Locacao.sync();
  console.log("Conexão estabelecida com sucesso!");
};

app.get("/", (req, res) => {
  res.json("Hello world");
});

app.listen(port, () => {
  db();
  console.log("Servidor rodando http://localhost:5000");
});
