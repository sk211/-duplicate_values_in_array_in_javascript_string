// find duplicate in array javascript 
const numString = "122344556677899"

const StringToArray = numString.split('')

const duplicates = StringToArray.reduce(function (acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el);
    return acc
}, [])

console.log(duplicates)
