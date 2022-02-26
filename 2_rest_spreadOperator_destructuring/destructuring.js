
var arr = ['Apple', 'Banana', 'Orange']
var apple = arr[0];
var banana = arr[1];
var orange = arr[2]

console.log(apple);

/*destructuring Assingment, retorna a mesma coisa de forma mais resumida, short hand
*/
var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange']
console.log(apple2);

//destructuring objects


var obj = {
    name: 'Douglas'
};
var { name } = obj
console.log(name);

//functions
function sum([a, b] = []) {
    return a + b
}
console.log(sum([5,5]));