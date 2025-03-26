// Importando o pacote do Express.js //
const express = require("express");

// Carregando o método principal do Express
const app = express(); //Iniciando o Express

// Configurando a view engine - EJS
app.set('view engine', 'ejs');

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
//Método .get cria uma rota na aplicação
// Req => trata a requisição
// Res => trata a resposta
app.get("/", function (req, res) {
  res.send(
    "<h1>Bem-vindo ao meu primeiro site em Node.js!</h1><br><p>Iniciando estudos com Node.js!</p><br>"
  );
});

//Rota de perfil
// :nome -> parâmetro obrigatório
// :nome? -> parâmetro opcional
app.get("/perfil/:nome?", function (req, res) {
  //res.send("<h1>Perfil do usuário</h1>");
  // Coletando o parâmetro da rota e gravando na variável
  const nome = req.params.nome;
  if (nome) {
    res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
  } else {
    res.send(`<h2>Faça login para acessar seu perfil!</h2>`);
  }
})

// Rota de produtos
app.get("/produtos", (req, res) =>{
    res.render("produtos")
})

// Iniciando o servidor da aplicação na porta 8080
// O método listen do Express inicia um servidor
app.listen(8080, function (error) {
  if (error) {
    console.log("Ocorreu um erro ao iniciar um servidor!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
