// Array (vetor ou lista)
let products = []
console.log(typeof(products))

let Products = ["Computer", "Notebook", "Cellphone", "Tablet"]
console.log(Products)

console.log("Show the list of indice?...")
console.log(Products[0])
console.log(Products[1])
console.log(Products[2])
console.log(Products[3])

console.log("Show the list with FOR...")
for (let c in Products){
    console.log(`${Number (c) + 1} - ${Products[c]}`)
}

console.log("Showing the list with the 'forEach'...")

Products.forEach(function (Products){
    console.log(Products)
})

console.log("Showing the list in the forEach whit the variables")

Products.forEach((Products, i) => {
    console.log(`${i+1} - ${Products}`)
})

// Métodos de manipulacao de vetores
let vetor = ['Orange', 'Apple', 'Banana']
console.log(`Our vector are: ${vetor}`)
vetor[3] = 'Strawberry'
console.log(`Our vector are: ${vetor} `)

// Método PUSH - Insere um novo elemento no final do vetor
vetor.push('Pineapple')
console.log(`Our vector are: ${vetor} `)

// Método UNSHIFT - Insere um novo elemento no ÍNICIO do vetor

vetor[0] = 'Pear'
console.log(`Our vector are: ${vetor} `)
vetor.unshift('Orange')
console.log(`Our vector are: ${vetor} `)

// Método LENGTH - Retorna o número de elementos no vetor

let numbers = [6, 8, 2, 9, 3, 200, 800]
console.log(`Our list of numbers is: ${numbers}`)
console.log(`The number of elements is: ${numbers.length} `)

// Método SORT - Ordenar o vetor 

console.log(`The first element of the list of fruits is: ${vetor[0]}`)
vetor.sort()
console.log(`Now the first element of the list is: ${vetor[0]} `)
console.log(`Our list of fruits ordenaded is ${vetor.sort()}`)

// Ordenação de números com SORT

console.log(`Our list of numbers is ${numbers}`)
numbers.sort()
console.log(`The list of numbers ordenaded is: ${numbers}`)

// Ordenação de forma CRESCENTE
console.log(numbers.sort((a, b) => a - b))

// Ordenação de forma DECRESCENTE
console.log(numbers.sort((a, b) => b - a))

