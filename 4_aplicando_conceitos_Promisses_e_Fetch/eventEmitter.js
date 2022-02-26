// Instanciando a classe Emitter

const EventEmitter = require ('events');
const emitter = new EventEmitter();

emitter.on('User logged', data => {
    console.log(data);
})

emitter.emit('User logged', {user: 'Douglas Barbosa'})

console.log('Ao emitir o evento o emmiter o consumiu')

console.log('--------------------------------');

//Estendendo a classe

console.log('Estendendo a classe');

const EventEmitter2 = require ('events');

class Users extends EventEmitter2 {
    userLogged2(data2){
        this.emit('User logged2',data2);
    }
}
const users = new Users();

users.on ('User logged2', data2 => {
    console.log(data2);
})

users.userLogged2({user: 'Douglas Barbosa'});
users.userLogged2({user: 'Douglas Alexandre Barbosa'});
const users2 = new Users();

// com metodo onde, ele consome apenas um dado

users2.once ('User logged2', data2 => {
    console.log(data2);
})
console.log('Usando metodo once');
users2.userLogged2({user: 'Douglas Barbosa'});
users2.userLogged2({user: 'Douglas Alexandre Barbosa'});
