Array.prototype.filter2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { name: 'Notebook', price: 2499, fragile: true},
    { name: 'iPad Pro', price: 4199, fragile: true},
    { name: 'Copo de Vidro', price: 12.49, fragile: true},
    { name: 'Copo de plástico', price: 18.99, fragile: false},
]

const expensive = p => p.price >= 500
const fragile = p => p.fragile

console.log(produtos.filter2(expensive).filter2(fragile))