// Comentário e JS

/*

nobari uana
sias tchugeeeeeeruuuuuu
marinomaaaaaaarinou...

- akon, 2000s */

//Declaração de Variáveis no JS
//Const x Let x Var (o corinthians não gosta disso)
//No escopo global, Const nao pode ser alterado

const nome = "Akon";
let Nome;
//const nome = "Pedro" -> resulta em um erro
//Let Nome -> resulta em um erro

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga"; // Let permite alterar o valor

const message = "Hello World!";
console.log(message);

//Typeof (esse comando exibirá o tipo da variável)
const state = "SP";
const age = 18;
let address;
console.log(typeof state);
console.log(typeof age);
console.log(typeof address);
//o javascript é uma linguagem de tipagem dinâmica e fraca.
///////////////////////////////////////////////////////////

//tipos de funções no javascript
function myFunction() {}
console.log(typeof myFunction);

//Função simples
function saudation() {
  console.log("Hello, welcome!");
}
saudation();

//Função com parãmetro / Argumento
//Parâmetro -> é o que a função recebe.
//Argumento -> é o dado que é enviado para a função

function saudation(name) {
  console.log("Hello, welcome" + name); //Concatenando
  //Usando template string ''
  console.log("Hello, welcome ${name}");

  //${} -> PlaceHolder
}

saudation("Paul"); //Argumento

//Função com mais de um parâmetro

function plus(n1, n2) {
  let result = n1 + n2;
  console.log("The soma? of the two values was ${result} .");
}
plus(5, 5);

//Funçao com retorno
function Plus(n1, n2) {
  return n1 + n2;
}

console.log("the soma? of the two values was ${Soma(2, 6)}.");

//Função com mais de um retorno
function parImpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
let num = 4;
console.log(parImpar(num));

// Função anônima
let double = function (x) {
  return x * 2;
};
console.log(double(15));

//Shift + Alt + F

// Arrow function com parâmetro único
// Função flecha
const Double = x => {
    return x*2
}

console.log('Function double with ERLON Function. Result: ${Double(20)}')

// Arrow function com mais de um parâmetro
const calc = (num1, operator, num2) => {
    return eval('${num1} ${operator} ${num2}')
}
console.log('The result of the operator is ${calc(6, '*', 6)}')

//Simplificando arrow function
const Calc = (num1, operator, num2) => eval('${num1} ${operator} ${num2}')
console.log('O resultado da operação é ${Calc(7, '*', 7)}.')

// IIFE - Immediately Invoked Function Expression
// Função Imediata - última \o/
const iife = (function(){
    console.log("Estou sendo executada imediatamente...")
})()

//IIFE com parâmetro
const start = (function(app){
    console.log('Executando imediatamente o app ${app}')
})("Whatsapp 2")



