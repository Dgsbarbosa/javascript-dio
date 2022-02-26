//Quando não é passado um parametro podemos atribuir um valor padrão apos os parametros
function multiply(a, b = 1) {
    return a * b;
} 
console.log(multiply(5, 5));

//lazy evaluation
function randomNumber(){
    console.log('Generation a random number...');
    return Math.random() * 10;
}
function multiply(a, b = randomNumber()) {
    return a * b;
} 
console.log(multiply(5));//cada vez que é invocada gera um numero aleatorio
console.log(multiply(5));