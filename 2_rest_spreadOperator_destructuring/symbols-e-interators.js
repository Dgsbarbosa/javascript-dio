//symbol maneira de guardar um valor unico
const uniqueId = Symbol();
console.log(uniqueId)

//passando um valor para o symbol para efeito de debug
const uniqueId2 = Symbol('Hello'/*valor do symbol*/);
console.log(uniqueId2)

// pode ser utilizados para gerar propriedades privadas
const uniqueId3 = Symbol('Hello')

const obj = {
    [uniqueId3]: 'Hello'
}
console.log(obj)

/* Well known symbol - Propriedades do symbol
Symbol.interator    
Symbol.split
Symbol.toStringTag
Symbol.toPrimitive
*/
const arr = [1, 2, 3, 4]
const it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());



