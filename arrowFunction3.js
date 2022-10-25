let compareToThis = function(param) {
    console.log(param === this)
}

compareToThis(global)

const obj = {}

compareToThis = compareToThis.bind(obj)
compareToThis(global)
compareToThis(obj)

let compareWithThisArrow = param => console.log(this === param)
compareWithThisArrow(global)
compareWithThisArrow(module.exports)

compareWithThisArrow = compareWithThisArrow.bind(obj)
compareWithThisArrow(obj)
compareWithThisArrow(module.exports)