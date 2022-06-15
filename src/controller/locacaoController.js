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
    const resultado = await Locacao.findAll({
      where: {
        imovel: {
          [Op.like]: `%${req.body.resultado}%`,
        },
      },
      order: [["id", "DESC"]],
    });

    if (resultado.length == 0) {
      return res.redirect("/catalogo");
    }

    res.render("catalogo", {
      casa: [],
      message,
      type,
      casaSearch: casa,
    });
  } catch  {
    res.status(400)
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

export const detalhes = async (req, res) => {
  try {
    const locacao = await Locacao.findByPk(req.params.id);
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
