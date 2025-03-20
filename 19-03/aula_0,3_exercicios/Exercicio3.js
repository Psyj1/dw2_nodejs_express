/* 
Formatação de moedas

3 – Crie uma função que receba um determinado salário em real como parâmetro e converta esse salário para as moedas Dólar e Euro. Deverá ser feito a conversão de valores e formatação da moeda. 

Considere:

1 real = 0.176 dólar

1 real = 0.16 euro
*/

let salario = 2000;
console.log(salario);

let salarioDolar = salario * 0.176;
console.log(
    salarioDolar.toLocaleString("en", {style: "currency", currency: "usd"})
);

let salarioEuro = salario * 0.16;
console.log(
    salarioEuro.toLocaleString("de-DE", {style: "currency", currency: "EUR"})
)