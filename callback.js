const cars = ["Mercedes", "Audi", "BMW"]

function print(name, index) {
    console.log(`${index + 1}. ${name}`)
}

cars.forEach(print)
cars.forEach(car => console.log(car))