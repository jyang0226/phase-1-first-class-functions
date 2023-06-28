

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    const myLove = () => console.log('My Love is so sweet!')
    return myLove
}

function returnsAnAnonymousFunction() {
    return () => console.log('I will marry him!')
}