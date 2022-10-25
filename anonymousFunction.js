const sum = function (x, y){
    return x+ y
}

const printResult = function (a, b, operation = sum){
    console.log(operation(a, b))
}

printResult(5, 5)
printResult(5, 5, sum)
printResult(5, 2, function (x, y) {
    return x - y
})
printResult(3, 4, (x, y) => x * y)
const people = {
    talk: () => {
        console.log('Hello')
    }
}