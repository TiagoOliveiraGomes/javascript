//Função literal
function literalFunction () {}

//Função em variavel
const functionInVar = (a, b) => { [console.log(a + b), a+b]}

//Função em um array
const array = [()=>'Ola', literalFunction, functionInVar]
console.log(array[0](), array[1], array[2])

//Função em um objeto
const object = {
    function1: ()=>console.log('Essa é a primeira função')
}
object.function2 = () => console.log('Esta é a segunda função')
object.function1()
object.function2()

//Pass function as param
function paramInFunction(func){
    func()
}
paramInFunction(object.function1)

//Funtion contain or returns other function
function sum (a, b) {
    return function (c){
        console.log(a + b + c)
    }
}

sum(2, 3)(15)
const fiveSumWith = sum(2, 3)
fiveSumWith(5)

