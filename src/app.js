import express from "express";
import sql from "mssql";
import routes from "./routes/route.js";

const app = express();

const port = 5000;

console.log("hellos");

const database = {
  user: "sa",
  password: "admin10",
  server: "localhost",
  database: "PRUEBAS",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export const getconection = async () => {
  const conect = await sql.connect(database);
  return conect;
};
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port);
