// Importando o Express
import express from "express" 
// Iniciando o Express
const app = express() 
// Importando o Sequelize
import connection from "./config/sequelize-config.js" 
// Importando os Controllers
import ClientesController from "./controllers/ClientesController.js"
import PedidosController from "./controllers/PedidosController.js"
import ProdutosController from "./controllers/ProdutosController.js"
//Importando os models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
//Importando os relacioamentos
import defineAssociations from "./config/association.js";

// Realizando a conexão com o banco de dados
connection.authenticate().then(()=> {
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error)
})

// Criando o banco de dados se ele não existir
connection.query(`CREATE DATABASE IF NOT EXISTS loja_relacional;`).then(() => {
    console.log("O banco de dados está criado.")
}).catch((error) => {
    console.log(error)
})

//Invocar a função que cria os relaiconamentos
defineAssociations();

//Sincronizando os Models
Promise.all([
    Cliente.sync({force: false}),
    Pedido.sync({force: false})
]).then(() => {
    console.log("Models e relacionamentos sincronizados com sucesso!")
}).catch(error => {
    console.log(`Erro ao sincronizar os models: ${error}`)
})

// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))
// Permite capturar dados vindo de formulários
app.use(express.urlencoded({extended: false}))
app.use(express.json())
// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController)
app.use("/", PedidosController)
app.use("/", ProdutosController)

// ROTA PRINCIPAL
app.get("/", function(req,res){
    res.render("index")
})

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, erro => {
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`)
    }
})