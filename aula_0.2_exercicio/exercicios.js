//1 – Crie um vetor contendo os nomes de todos os estados brasileiros. Em seguida, exiba esse vetor na tela através de uma estrutura forEach. Os índices do vetor também devem ser exibidos.

const states = [
  "Acre",
  "Amazonas",
  "Amapá",
  "Bahia",
  "Ceará",
  "Rondônia",
  "Roraima",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rio de Janeiro",
  "São Paulo",
  "Santa Catarina",
  "Paraná",
  "Mato Grosso do Sul",
  "Maranhão",
  "Piauí",
  "Minas Gerais",
  "Paraíba",
  "Pernambuco",
  "Alagoas",
  "Sergipe",
  "Espírito Santo",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Tocantins",
  "Goiás",
  "Pará",
];
states.sort();

states.forEach((states) => {
  console.log(states);
});

// 2 – Crie um objeto literal para descrever você. Esse objeto deve ter no mínimo 5 chaves, por exemplo, nome, idade, cidade, hobby, música preferida. Em seguida, exiba as chaves e valores na tela.

 me = 
  [{
    name: "Paulo",
    age: "19 years",
    city: "Tokyo",
    hobby: "Playing chess",
    favmusic: "Um Girassol da Cor do Seu Cabelo",
  }];

me.forEach(me => {
  console.log(`Name: ${me.name}`)
  console.log(`Age: ${me.age}`)
  console.log(`City: ${me.city}`)
  console.log(`Hobby: ${me.hobby}`)
  console.log(`Favorite music: ${me.favmusic}`)
});

//3 – Crie um array de objetos de filmes com no mínimo 5 filmes. Cada filme deve possuir no mínimo 4 chaves, por exemplo, título, gênero, ano e classificação de idade. Em seguida, exiba o array de objetos através de uma estrutura forEach.

const Movielist = [{
    title: "A Fuga das Galinhas",
    Gender: "Animation",
    Age: "2000",
    Classification: "4.2"
},
{
    title: "Shrek",
    Gender: "Animation",
    Age: "2001",
    Classification: "4.6"
},
{
    title: "O Segredo dos Animais",
    Gender: "Animation",
    Age: "2006",
    Classification: "4.0"
},
{
    title: "Super Bad",
    Gender: "Comedy",
    Age: "2007",
    Classification: "4.2"
},
{
    title: "Carros",
    Gender: "Animation",
    Age: "2006",
    Classification: "4.4"
}];

Movielist.forEach(Movielist => {
    console.log(`Title: ${Movielist.title}`)
    console.log(`Gender: ${Movielist.Gender}`)
    console.log(`Age: ${Movielist.Age}`)
    console.log(`Classification: ${Movielist.Classification}`)
  });
  
