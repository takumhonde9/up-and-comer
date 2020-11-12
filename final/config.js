const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  host: process.env.HOST,
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  lang: process.env.DB_LANG,
  port: process.env.PORT,
};
