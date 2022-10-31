const student = [
    {name: 'João', nota: 7.3, bolsista: false},
    {name: 'Maria', nota: 9.2, bolsista: true},
    {name: 'Pedro', nota: 9.8, bolsista: false},
    {name: 'Ana', nota: 6.7, bolsista: true},
]

const areAllBolsista = student.map(student => student.bolsista).reduce((acumulador, atual) => acumulador && atual)

const isSomeoneBolsista = student.map(student => student.bolsista).reduce((acumulador, atual) => acumulador || atual)



console.log('Todos alunos são bolsistas? ', `${areAllBolsista? 'Sim' : 'Não'}`)
console.log('Algum aluno é bolsista? ', `${isSomeoneBolsista? 'Sim' : 'Não'}`)