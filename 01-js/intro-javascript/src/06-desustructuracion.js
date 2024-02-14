//Desestructuración

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
}

const  {nombre,edad,clave} = persona

console.log(nombre);

const retornaPersona = ({nombre,edad,clave}) =>{
   
    return{
        nombreClave: clave,
        anios:edad,
        latlng:{
            lng: 14.2344,
            lat: 334.545
        }
    }
}

const {nombreClave,anios, latlng:{lng,lat}} = retornaPersona(persona);

console.log(nombreClave);   
console.log(lng);