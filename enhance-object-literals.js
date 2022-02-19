//shorthand (forma abreviada)
function method1() {
    console.log('method called');
}
var obj = {
    method1
};
obj.method1();

//outro metodo

var obj = {
    sum: function sum(a = 0, b = 0, c = 0, d = 0) {
        return a + b + c + d;
    }
}
console.log('Com os 4 parametros');
console.log(obj.sum(3, 3, 5, 5));
console.log('Com 3 parametros');
console.log(obj.sum(3, 3, 5));
console.log('Com 2 parametros');
console.log(obj.sum(3, 3));

//podemos encurtar mais um pouco
var obj = {
    sum(a, b) {
        return a + b;
    }
};
console.log('Metodo mais curto');
console.log(obj.sum(2, 5));
