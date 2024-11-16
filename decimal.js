var Array1 = [2, 4, 6, 3, 1, 5, 9, 8]
console.log( "Original Array", Array1)

Array1.push(1.33, 2.1, 3.14, 32.55)
console.log("New Array", Array1)

const result = Array1.filter(num =>Number.isInteger(num) )
const result1 = Array1.filter(num => !Number.isInteger(num) )

console.log("Interger", result)
console.log("Decimals", result1)