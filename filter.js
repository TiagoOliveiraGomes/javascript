const produtos = [
    { name: 'Notebook', price: 2499, fragile: true},
    { name: 'iPad Pro', price: 4199, fragile: true},
    { name: 'Copo de Vidro', price: 12.49, fragile: true},
    { name: 'Copo de plástico', price: 18.99, fragile: false},
]

const expensive = p => p.price >= 500
const fragile = p => p.fragile

console.log(produtos.filter(expensive).filter(fragile))