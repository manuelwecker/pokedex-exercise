const promise = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
promise
  .then(result => {
    return result.json();
  })
  .then(data => {
    console.log(data);
  });

// wie hier

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(data => console.log(data));
