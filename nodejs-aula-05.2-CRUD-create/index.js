// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";

//Importando o Sequelize-config com os dados da conexão
import connection from "./config/sequelize-config.js";

// Realizando a conexão com o banco de dados
// then() -> trata o sucesso
// catch() -> trata a falha
connection.authenticate().then(() =>{
  console.log("Conexão com o banco realizada com sucesso!");
}).catch((error) =>{
  console.log(error)
})

// Criar o banco de dados do projeto (se ele não existir)
connection.query(`CREATE DATABASE IF NOT EXISTS sistemaLoja;`).then(() =>{
  console.log("O banco de dados está criado!");
}).catch((error) =>{
  console.log(error);
})

// Configurando o Express para aceitar dados vindos de um formulário
app.use(express.urlencoded({extended : false}))

// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

// ROTA PRINCIPAL
app.get("/", function (req, res) {
  res.render("index");
});

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080;
app.listen(port, function (erro) {
  if (erro) {
    console.log("Ocorreu um erro!");
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
