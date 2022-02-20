//Spread operator pode ser utilizado com strings, arrayes, literal objects e objetos interaveis

//com string - Quebrando caracteres tranformando em um aarray
const str = 'Digital Innovation One';
function LogArgs(...args) {
    console.group(args)
}
console.log(str);
LogArgs(...str);

const str1 = 'Douglas'
function LogArgs1(...args) {
    console.group(arguments)
}
LogArgs(...str1);

//em arrays
const arr = [1, 2, 3, 4];
function LogArgs2() {
    console.log(arguments);
}
LogArgs(...arr);
const array2 = [1, 2, 3, 4];
function LogArgs3(a, b, c) {
    console.log(a, b, c);
}
LogArgs(...array2)

//para construir um array, esta juntanto a primeiro array com array2
const arr2 = [...arr, 5, 6, 7]
console.log(arr2)

//com objetos literais
const obj = {
    test: 123
};
const obj2 = {
    ...obj,
    test2: 'hello'
}
console.log(obj2);





