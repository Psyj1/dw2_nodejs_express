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
