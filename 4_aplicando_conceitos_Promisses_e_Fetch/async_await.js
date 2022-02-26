// usando async ela ja transforma em uma Promise
console.log('Async')
const simpleFunc = async () => {
    return 12345;
};
console.log(simpleFunc());

console.log('------------------')


// retornado os dados da promise

const simpleFunc2 = async () => {
    return 12345;
};
simpleFunc2().then(data => {
    console.log('Retornado os dados da promise')
    console.log(data)
    console.log('------------------')
})

// tratando erro

const simpleFunc3 = async () => {
    throw new Error('Oh no!');
    return 12345;
};
simpleFunc2().then(data => {
    console.log(data)

})
    .catch(err => {
        console.log(err)
        console.log('------------------')
    })

// Assync com Await


const asyncTimer = () =>
    new Promise((resolve, reject) => {
        console.log('O await vai esperar resover esta promeiro')
        setTimeout(() => {
            resolve(12345);
        }, 1000);
    });

const simpleFunc4 = async () => {
    const data2 = await asyncTimer();
    return data2;
}; simpleFunc4()
    .then(data2 => {
        console.log('Assync com Await');
        console.log(data2);
    })
    .catch(err => {
        console.log(err)
    })

