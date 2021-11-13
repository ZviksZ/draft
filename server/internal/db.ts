import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "postgres",
  port: 5433,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

async function startDB() {
  try {
    await sequelize.authenticate();
    console.log("Соединение с БД было успешно установлено");
  } catch (e) {
    console.log("Невозможно выполнить подключение к БД: ", e);
  }
}

startDB();
