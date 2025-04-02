// Importando o pacote do Express.js //
const express = require("express");

// Carregando o método principal do Express
const app = express(); //Iniciando o Express

// Configurando a view engine - EJS
app.set("view engine", "ejs");

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
//Método .get cria uma rota na aplicação
// Req => trata a requisição
// Res => trata a resposta
app.get("/", (req, res) => {
  res.render("index");
});

//Rota de perfil
// :nome -> parâmetro obrigatório
// :nome? -> parâmetro opcional
app.get("/perfil", (req, res) => {
  //res.send("<h1>Perfil do usuário</h1>");
  // Coletando o parâmetro da rota e gravando na variável
  res.render("perfil");
});

// Rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  // Coletando o parâmetro da rota
  const produto = req.params.produto;

  // Array com uma lista de produtos
  const produtos = ['Computador', 'Celular', 'Tablet', 'Notebook']

  res.render("produtos", {
    // Enviando a variável produto para a página
    produto: produto,
    produtos : produtos
  });
});

// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8080, (error) => {
  if (error) {
    console.log("Ocorreu um erro ao iniciar um servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
