import { Sequelize } from "sequelize";

const sequelize = new Sequelize("draft_db", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
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
