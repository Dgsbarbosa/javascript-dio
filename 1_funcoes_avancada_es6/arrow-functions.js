function name (value) {
    console.log(value)
}

// Função Anonima
var name = function(value){
    console.log(value);
}

//Arrows functios - Formas de chamar
var sum = (a, b) => a + b;
console.log(sum(5,15));

var createObj = () => ({ test : 123})
console.log(createObj());

function Car(){
    this.foo = 'bar';
}
console.log(new Car());

// Caracteristica de Hoytin
log('test')
function log(value){
    console.log(value);
}

//Contexto de invocação
var obj = {
    showContext: function showContext(){
        //this = obj
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();
