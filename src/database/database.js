import Sequelize from "sequelize";

const sequelize = new Sequelize({
  database: process.env.DB_BASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  dialect: "postgres",
  host: process.env.DB_HOST,
  port: 5432,
});

export default sequelize;
