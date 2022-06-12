import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Locacao = sequelize.define("Rent", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  imovel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: DataTypes.STRING,
  fav: DataTypes.BOOLEAN,
});

export default Locacao;
