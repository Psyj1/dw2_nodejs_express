import express from "express";
const router = express.Router();

// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  
  // Fazendo um select na tabela de Clientes
  // fundAll() -> retorna uma promisse
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  }).catch((error) => {
    console.log(error);
  });
});
export default router;