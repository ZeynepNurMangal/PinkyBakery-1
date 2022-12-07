const express = require("express");
const sql = require("mssql");
const app = express();
const bodyParser = require("body-parser");
const spFunction = require("./storedProcedure");
const router = require("./apiMethod");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
  user: "Code1x2!",
  password: "Arita2021!",
  server: "188.138.41.86",
  database: "PinkyBakery",
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
};
app.use(router);

const server = app.listen(3500, async function () {
  try {
    sqlConRes = await sql.connect(config);
    console.log("Uygulama Başlatıldı.");
  } catch (error) {
    console.log("Uygulama Başlatılamadı.", error);
  }
});
