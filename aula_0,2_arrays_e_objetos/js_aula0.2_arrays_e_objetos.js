// Array (vetor ou lista)
let products = [];
console.log(typeof products);

let Products = ["Computer", "Notebook", "Cellphone", "Tablet"];
console.log(Products);

console.log("Show the list of indice?...");
console.log(Products[0]);
console.log(Products[1]);
console.log(Products[2]);
console.log(Products[3]);

console.log("Show the list with FOR...");
for (let c in Products) {
  console.log(`${Number(c) + 1} - ${Products[c]}`);
}

console.log("Showing the list with the 'forEach'...");

Products.forEach(function (Products) {
  console.log(Products);
});

console.log("Showing the list in the forEach whit the variables");

Products.forEach((Products, i) => {
  console.log(`${i + 1} - ${Products}`);
});

// Métodos de manipulacao de vetores
let vetor = ["Orange", "Apple", "Banana"];
console.log(`Our vector are: ${vetor}`);
vetor[3] = "Strawberry";
console.log(`Our vector are: ${vetor} `);

// Método PUSH - Insere um novo elemento no final do vetor
vetor.push("Pineapple");
console.log(`Our vector are: ${vetor} `);

// Método UNSHIFT - Insere um novo elemento no ÍNICIO do vetor

vetor[0] = "Pear";
console.log(`Our vector are: ${vetor} `);
vetor.unshift("Orange");
console.log(`Our vector are: ${vetor} `);

// Método LENGTH - Retorna o número de elementos no vetor

let numbers = [6, 8, 2, 9, 3, 200, 800];
console.log(`Our list of numbers is: ${numbers}`);
console.log(`The number of elements is: ${numbers.length} `);

// Método SORT - Ordenar o vetor

console.log(`The first element of the list of fruits is: ${vetor[0]}`);
vetor.sort();
console.log(`Now the first element of the list is: ${vetor[0]} `);
console.log(`Our list of fruits ordenaded is ${vetor.sort()}`);

// Ordenação de números com SORT

console.log(`Our list of numbers is ${numbers}`);
numbers.sort();
console.log(`The list of numbers ordenaded is: ${numbers}`);

// Ordenação de forma CRESCENTE
console.log(numbers.sort((a, b) => a - b));

// Ordenação de forma DECRESCENTE
console.log(numbers.sort((a, b) => b - a));

////////////////////////////////////////////////////////////////////////////////
// OBJETOS LITERAIS (não são derivados de classes)
// Objetos possuem Atributos (características) e Métodos (ações)
// Lado esquerdo: chaves / Lado direito: valores

const pessoa = {};
console.log(typeof pessoa);

const car = {
  // Atributos
  model: "gol",
  color: "red",
  // Method
  acelerate() {
    console.log("Acelerating...");
  },
  stop() {
    console.log("Stopping...");
  },
};
console.log(`The model of the car is: ${car.model}`);
console.log(`The color of the car is: ${car.color}`);
car.acelerate();
car.stop();
//////////////////////////////////////////////////////////////////////////////////////////////////////

const product = {
  name: "Computer",
  logo: "Lenovo",
  price: 3000,
  description: "Modern PC with good performance.",
};

console.log(product)
console.log(`The ${product.name} of logo ${product.logo} cost just R$ ${product.price}. ${product.description}`)

////////////////////////////////////////////////////////////////////////////////////////////////////////

// ARRAY DE OBJETOS

const Productslist = [{
    name: "Computer",
    logo: "Lenovo",
    price: 3000,
    description: "Modern PC with good performance.",
},
{
    name: "Tablet",
    logo: "Samsung",
    price: 2000,
    description: "Great speed of process",
},
{
    name: "Cellphone",
    logo: "Apple",
    price: 12000,
    description: "Ultra resist. Much cheap!",
},
];
    console.log()
// Exibindo o ARRAY DE OBJETOS com forEach:
Productslist.forEach(product => {
    console.log(`Product: ${product.name}`)
    console.log(`Logo: ${product.logo}`)
    console.log(`Price: ${product.price}`)
    console.log(`Description: ${product.description}`)
    console.log()
})

// console.table
console.table(Productslist)
