const nums = [1, 2, 3, 4, 5]

const sum10 = e => e + 10
const double = e => e * 2
const triple = e => e * 3
const toMoneyReal = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const result = nums.map(double).map(sum10).map(triple).map(toMoneyReal)
console.log(result)