const employee = {name: 'Maria', wage: 12500}
const clone = {active: true, ...employee}
console.log(clone)

const groupA = ['joão', 'Pedro', 'Gloria']
const groupFinal = ['Jonas', 'Rafaela', ...groupA]
console.log(groupFinal)