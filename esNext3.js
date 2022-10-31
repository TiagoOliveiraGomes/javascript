const obj = {a: 1, b: 2, c: 3}
console.log("Keys: ",Object.keys(obj))
console.log("Values: ", Object.values(obj))
console.log("Entries: ", Object.entries(obj))

const nome = 'Carla'
const people = {
    nome,
    ola: ()=> {
        return 'Heello people'
    }
}

console.log(people.nome, people.ola())

class Animal {}
class Dog extends Animal {
    bark(){
        return 'Au Au!'
    }
}

console.log(new Dog().bark())