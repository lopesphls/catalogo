import { Sequelize } from "sequelize";
import sequelize from "../database/database.js";

const Locacao = sequelize.define("Locacao", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imovel: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  valor: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imagem: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  descricao: Sequelize.STRING,
});

export default Locacao;
