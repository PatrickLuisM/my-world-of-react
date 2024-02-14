// const getImagenPromesa = () =>{
//     const promesa = new Promise ( (resolve,reject)=>{
//         resolve('https://sadaaa.com')
//     })
//     return promesa;
// }

// getImagenPromesa().then(console.log)

const getImagen = async() =>{
    const pokemon = 2
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await respuesta.json();
    
    const {sprites:{front_default}} = data;
    console.log(front_default);

    const img = document.createElement('img');
    img.src = front_default

    document.body.append(img);
}

getImagen()