const dotEnv = require("dotenv");
require('dotenv').config()
console.log('Process ENV: ',process.env.NODE_ENV)
if (process.env.NODE_ENV !== "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  console.log('Data dot env: ',dotEnv)
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
};
