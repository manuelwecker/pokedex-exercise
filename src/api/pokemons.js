/**
 * json-pokemon is a package which is installed with `npm i json-pokemon`.
 * See https://www.npmjs.com/package/json-pokemon
 *
 * You will find details about the properties of a pokemon.
 *
 * There are some helper functions which makes this task easier, but please try to implement your own filter and search logic.
 */
// import pokemons from 'json-pokemon';
import pokemons from './pokemons.json';

export function getAllPokemons() {
  return pokemons;
}

export function getPokemonsByName(pokemonName) {
  const normalizedName = pokemonName.toLowerCase();
  const pickPokemons = pokemons.filter(pokemon => {
    const normalizedPokemonName = pokemon.name.toLowerCase();
    return normalizedPokemonName.startsWith(normalizedName);
  });

  return pickPokemons;
}

export function sortPokemonsByName(pokemons, sortDirection = 'ASC') {
  /**
   * `sortDirection` could be `ASC` or `DESC`. Try to reverse the results if `sortDirection` is `DESC`.
   *
   * See Array.prototype.sort()
   * And see reverse option for arrays
   */
  // pokemons.sort(function(pokemonA, pokemonB) {
  //   const nameA = pokemonA.name.toUpperCase(); // ignore upper and lowercase
  //   const nameB = pokemonB.name.toUpperCase(); // ignore upper and lowercase
  //   if (nameA < nameB) {
  //     return -1;
  //   }
  //   if (nameA > nameB) {
  //     return 1;
  //   }
  //   // names must be equal
  //   return 0;
  // )}
}
