import Locacao from "../model/locacaoModel.js";

export const index = (req, res) => {
  res.render("index");
};

export const cadastrar = async (req, res) => {
  try {
    const cadastrado = req.body;
    await Locacao.create(cadastrado);
    return res.redirect("/catalogo");
  } catch {
    res.status(400);
  }
};

export const cadastro = async (req, res) => {
  try {
    res.render("cadastrar");
  } catch {
    res.status(400);
  }
};

export const listar = async (req, res) => {
  try {
    const locacao = await Locacao.findByPk(req.params.id);
    res.render("/pesquisa", { locacao });
  } catch {
    res.status(404);
  }
};

export const catalogo = async (req, res) => {
  try {
    const locacao = await Locacao.findAll();
    res.render("catalogo", { locacao });
  } catch {
    res.send(404);
  }
};

export const deletar = async (req, res) => {
  try {
    const locacao = await Locacao.findByPk(req.params.id);
    await locacao.destroy();
    return res.redirect("/catalogo");
  } catch {
    res.status(500);
  }
};
