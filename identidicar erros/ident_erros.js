try {

const name = 'Douglas Barbosa';
const myError = new Error ('Custom message');
throw myError;
}catch (err){
    console.log('Error: ', err);
} finally {
console.log('Keep going');
}