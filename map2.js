const car = [
    '{ "name": "Rubber", "price": 3.45 }',
    '{ "name": "pencil kit", "price": 41.22 }',
    '{ "name": "pen", "price": 7.50 }',
]
const prices = car.map(e => JSON.parse(e)).map(e => 'Price: ' + e.price)

console.log(prices)