const grades = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Without callback
let badGrades1 = []
for(let i in grades) {
    if(grades[i] < 7) {
        badGrades1.push(grades[i])
    }
}
console.log(badGrades1)

//With ballback
badGrades2 = grades.filter(grade=>grade < 7)
console.log(badGrades2)