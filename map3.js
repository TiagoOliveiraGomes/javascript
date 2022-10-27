Array.prototype.map2 = function(callback) {
    const newArray = []

    for(let i = 0; i< this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const car = [
    '{ "name": "Rubber", "price": 3.45 }',
    '{ "name": "pencil kit", "price": 41.22 }',
    '{ "name": "pen", "price": 7.50 }',
]
const prices = car.map2(e => JSON.parse(e)).map2(e => 'Price: ' + e.price)

console.log(prices)