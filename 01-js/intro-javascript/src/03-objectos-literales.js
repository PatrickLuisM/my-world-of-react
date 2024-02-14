const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        cuidad: 'New York',
        zip: 3434309,
        lat: 12.3343,
        lng: 45.6555
    }
};

console.log(persona);

const persona2= {...persona};
persona2.nombre = 'Peter'

console.log(persona2);