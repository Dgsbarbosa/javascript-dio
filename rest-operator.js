/*rest operator se ecreve com tres pontos (...)
    EX: function sum (...args) {
        console.log(args)
    }
    console.log(sum(5,5,5,2,3))
*/
function sum(...args) {
    console.log(args)
}
console.log(sum(5, 5, 5, 2, 3))

function sum(...args) {
    console.log(arguments)
}
console.log(sum(5, 5, 5, 2, 3))

function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}
console.log(sum(5, 5, 5, 2, 3))

function multiply(...args) {
    return args.reduce((acc, value) => acc * value, 1)
}
console.log(multiply(2, 2, 2, 2, 2))
