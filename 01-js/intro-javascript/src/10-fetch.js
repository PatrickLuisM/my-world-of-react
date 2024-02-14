

const pokemon = 1
const peticion = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

peticion
     .then(resp => resp.json())
     .then( ({sprites})=>{
        
        const url = sprites.front_default;
        const img = document.createElement('img');
        img.src = url

        document.body.append(img);
     })
     .catch(console.warn);