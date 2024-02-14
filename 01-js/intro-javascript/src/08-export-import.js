// import {heroes} from './data/heroes'
import {heroes} from './data/heroes'

//console.log(heroes);

export const getHeroesById = (id)=>{
    return heroes.find((index)=> index.id === id)
}


const getHeroesByOwner = (owner) => heroes.filter((heroe)=>heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));
// console.log(getHeroesById(3));