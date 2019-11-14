/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
// import pokemons from 'json-pokemon';
// import pokemons from './pokemons.json';

let pokemons = [];

export async function initPokemons() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000');
  const data = await response.json();
  pokemons = data.results;
}

// export function getPokemonDetails(pokemonUrl) {
//   const response = await fetch(pokemonUrl);
//   const data = pokemonUrl;
//   return data;
// }

// Callback as async function
export function getAllPokemons() {
  return pokemons;
  //
  // fetch('https://pokeapi.co/api/v2/pokemon/?limit=1000')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error));

  // const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
  // const data = await response.json();
  // console.log(data);
  // const pokemons = data;
  // console.log('Done');
  // return pokemons;
}

// export function getPokemonsByName(pokemonName) {
//   /**
//    * pokemonName is unused.
//    * You could use this property to filter the pokemons by name.
//    * Take a look: Array.prototype.filter()
//    *
//    * Try to return all pokemons which starts with the name like: `pik` -> `Pikachu`, `Pikipek`.
//    * It should be case independend.
//    */
//   return pokemons;
// }

export function getPokemonsByName(pokemonName) {
  const normalizedName = pokemonName.toLowerCase();
  const pickPokemons = pokemons.filter(pokemon => {
    const normalizedPokemonName = pokemon.name.toLowerCase();
    return normalizedPokemonName.startsWith(normalizedName);
  });

  return pickPokemons;
}

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
  if (sortDirection === 'ASC') {
    const sortedPokemons = pokemons.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedPokemons;
  } else if (sortDirection === 'DESC') {
    const sortedPokemons = pokemons.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedPokemons.reverse();
  }
}

// export function sortPokemonsByName(pokemons, sortDirection = 'DESC') {
//   const sortedPokemons = pokemons.sort((pokemonA, pokemonB) => {
//     const nameA = pokemonA.name.toLowerCase();
//     const nameB = pokemonB.name.toLowerCase();

//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     return 0;
//   });
//   if (sortDirection === 'DESC') {
//     sortedPokemons.reverse();
//   }
//   return pokemons;
// }

// export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
// /**
//  * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
//  *
//  * See Array.prototype.sort()
//  * And see reverse option for arrays
//  */
//   if (sortDirection === 'ASC') {
//     const sortedPokemons = pokemons.sort(a, b) => a.name.localeCompare(b.name);
//   }
//    pokemons.sort(function(pokemonA, pokemonB) {
//     const nameA = pokemonA.name.toUpperCase(); // ignore upper and lowercase
//     const nameB = pokemonB.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     // names must be equal
//     return 0;
//   )}
// )}
