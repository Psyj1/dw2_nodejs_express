//Função simples 1 – Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. (Não esqueça de invocar a função no final).
function saudation() {
  console.log("Paulo, 19, Registro");
}
saudation();

//Função com parâmetros 2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”). A função deve ser chamada ao final passando dois números como argumento.
function plus(n1, n2) {
  let result = n1 / n2;
  console.log("the first number divided with the second number is: " + result)
}
plus(10, 2);

//Função com retorno 3 – Crie uma função que receba três números e retorne a multiplicação entre esses números. O resultado deve ser exibido no console.
function Plus (n1, n2, n3) {
    return n1 * n2 * n3;
}
Plus(5, 8, 10);

//Função com mais de um retorno 4 – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar o valor “Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.
function age(n) {
  if(n >= 18){
    console.log("More than 18 years");
  } else {
    console.log("Minus than 18 years");
  }
}
age(16);

//Função anônima 5 – Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a função deve retornar o valor “Reprovado”, se não deve retornar o valor “Aprovado”.  O resultado deve ser exibido no console. Considere média = (nota1 + nota2) / 2.

let mid = function(x, y){
    let calc = (x+y)/2;
  if (calc <= 5){
    console.log("Reproved");
  } else {
    console.log("Aproved");
  }
}
mid(7, 6);

//Arrow function com parâmetro único 6 – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O resultado deve ser exibido no console concatenado com uma string. (Ex: “O triplo do número é...”)

const triple = x => {
  return x*3;
}
console.log(`The result is ${triple(5)}`);

//Arrow function com mais de um parâmetro 7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses números. O resultado deve ser impresso no console.

const result = (n1, n2, n3, n4) =>{
  return n1 + n2 + n3 + n4;
}
console.log (`The result of the operation is ${result(4, 4, 4, 4)}`);

//IIFE 8 – Crie uma função imediata que receba o nome de uma pessoa como parâmetro e exiba no console uma saudação a essa pessoa.

const iife = (function(name){
  console.log(`Hello, welcome ${name}`);
})("Diego");