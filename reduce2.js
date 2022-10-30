const student = [
    {name: 'João', nota: 7.3, bolsista: false},
    {name: 'Maria', nota: 9.2, bolsista: true},
    {name: 'Pedro', nota: 9.8, bolsista: false},
    {name: 'Ana', nota: 6.7, bolsista: true},
]

const result = student.map(student => student.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)