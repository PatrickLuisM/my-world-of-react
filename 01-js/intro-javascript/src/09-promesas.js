import { getHeroesById } from "./08-export-import";
import { heroes } from "./data/heroes";

// const promesa = new Promise( (resolve,reject)=>{
//       setTimeout(()=>{
//            const heroe = getHeroesById(2);
//            resolve(heroe);
//       },2000)
// });

// promesa.then( (heroe)=>{
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroesByIdAsync = (id) =>{
    return new Promise( (resolve,reject)=>{
      setTimeout(()=>{
           const heroe = getHeroesById(id);
           if (heroe){
            resolve(heroe);    
           }else{
            reject('No se pudo encontrar al heroe')
           }
           
      },2000)
   });


}

getHeroesByIdAsync(1)
    .then(console.log)
    .catch(console.warn)