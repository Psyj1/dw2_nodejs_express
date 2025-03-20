/*
2 – Crie uma arrow function que exiba uma data no console da seguinte forma:

- Três dias a mais que o dia atual;

- Dois meses a mais que o mês atual;

- Um ano a mais que o ano atual;

O formato da data deve ser exibida no padrão dia/mês/ano.
*/

const dateAtual = new Date();

const dia = dateAtual.getDate();
const mes = dateAtual.getMonth();
const ano = dateAtual.getFullYear();


diaNovo = function() {
    dateAtual.setDate(dateAtual.getDate());
    dateAtual.setMonth(dateAtual.getMonth());
    dateAtual.setFullYear(dateAtual.getFullYear());  
    
    console.log(`Dia ${dia + 3}, Mês ${mes + 3}, Ano ${ano + 1}`);
}

diaNovo();