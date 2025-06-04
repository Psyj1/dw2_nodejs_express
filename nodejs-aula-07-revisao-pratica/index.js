import express from "express";
import MoviesController from "./controllers/MoviesController.js";
import connection from "./config/sequelize-config.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended: false}));
app.use("/", MoviesController);


connection.authenticate().then(() => {
    console.log("Connection with database made with success!");
  }).catch((error) => {
    console.log(error);
  });

connection.query(`CREATE DATABASE IF NOT EXISTS movies;`).then(() => {
    console.log("The database was created.");
  })
  .catch((error) => {
    console.log(error);
  });

const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`It happen an error: ${error}`);
  } else {
    console.log(`Server initialize in http://localhost:${port}`);
  }
});
