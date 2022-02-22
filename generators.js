//Generators

function hello() {
    console.log('Hello');
    console.log('From');
    console.log('Function!');
}
hello()
console.log('-------------------------------')

//Retornando valores
// Com generator colocando asteristico (*) e a palavra reservada 'yield' consegue-se dar pausar
// deve executar varias vezes para aparecer valores

function* hello2() {/*asteristico*/
    console.log('Hello1');
    /* palavra reservada do generator*/ 
    yield 1 // passando valor 
    console.log('From1');
    const value = yield 2 // passando valor 
    console.log(value);
    
}
const it = hello2();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside')); // recebendo valores de fora da funcao para dentro

console.log('---------------------------');
// Geenerator como construtor de interators

const arr = [1,2,3,4];
const str = 'Digital Innovation One'

const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj){
    console.log(value)
}
