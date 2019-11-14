// require to use async and await
import 'babel-polyfill';
import {
  createNoPokemons,
  createPokemonElements,
  setChild,
  resetInput
} from './api/elements';
import {
  getPokemonsByName,
  getAllPokemons,
  sortPokemonsByName,
  initPokemons
} from './api/pokemons';

initPokemons().then(start);

function start() {
  // Query elements
  const searchInput = document.querySelector('.search__input');
  const resultsElement = document.querySelector('.results');

  // Get all pokemons
  getAllPokemons().then(allPokemons => {
    // const allSortedPokemons = sortPokemonsByName(allPokemons);
    const allSortedPokemons = sortPokemonsByName(allPokemons);
    allPokemons();
    resetInput(searchInput);
    const allPokemonElements = createPokemonElements(allSortedPokemons);
    setChild(resultsElement, allPokemonElements);
  });

  // })

  // Reset input and results
  resetInput(searchInput);
  const allPokemonElements = createPokemonElements(allPokemons);
  setChild(resultsElement, allPokemonElements);

  // Add event listeners
  searchInput.addEventListener('input', event => {
    const searchValue = event.target.value;
    const pokemons = getPokemonsByName(searchValue);
    const pokemonElements = createPokemonElements(pokemons);

    function createSearchCounter() {
      const counter = pokemons.length;
      return counter;
    }
    // setChild(resultsElement, pokemonElements);
    console.log(pokemons);
    if (pokemons.length > 0) {
      setChild(resultsElement, pokemonElements);
      console.log(createSearchCounter());
      // const elementSearchCounter = document.createElement('div');
      // elementSearchCounter.setAttribute.className('result__searchcount');
      document.querySelector(
        '.search__countinput'
      ).innerHTML = createSearchCounter();
      // createSearchCounter()
      // parentElement(resultsElement, createSearchCounter());
      const searchCounter = pokemonElements.length;
    } else {
      // const allPokemonElements = createPokemonElements(allPokemons);
      setChild(results, createNoPokemons());
    }
  });

  /**
   * Later, you can add sort functionality.
   */
}
