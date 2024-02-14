// Funciones en JS

function saludar(nombre){
    return `Hola ${nombre}`
}

const saludar2 = (nombre) =>{
    return `Hola ${nombre}`
}

const saludar3 = (nombre) => `Hola ${nombre}`;


console.log(saludar3('patrick'));


// function getUserActivo(nombre){
//     return{
//         uid: 'ABC567',
//         username: nombre
//     }
// }

const getUserActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

const userActivo = getUserActivo('Patrick');
console.log(userActivo);