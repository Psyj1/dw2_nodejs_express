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
function idade(n) {
}