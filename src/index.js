import "dotenv/config";
import express from "express";
import path from "path";
import Locacao from "./model/locacaoModel.js";
import routes from "./routes/locacaoRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.resolve("src/views"));
app.use(express.static(path.resolve("public")));
app.use(express.urlencoded());

const db = async () => {
  await Locacao.sync();
  console.log("Conexão estabelecida com sucesso!");
};

app.use(routes);

app.listen(port, () => {
  db();
  console.log("Servidor rodando http://localhost:5000");
});
