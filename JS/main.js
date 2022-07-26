
/* let search_input = document.getElementById("search_button")*/

let containerPokemon = document.getElementById("container-pokemon");
let currentPokemonI = 0;
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

let pokemons = JSON.parse(poke_file)["result"];
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

function nextPokemon() {
  if (currentPokemonI == pokemons.length) return;
  currentPokemonI++;
  displayPokemon(pokemons[currentPokemonI]);
}
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

function previousPokemon() {
    if (currentPokemonI == 0) return;
    currentPokemonI--;
    displayPokemon(pokemons[currentPokemonI]);
}
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

function displayPokemon(pokemon) {
  if ( pokemon ) {
    containerPokemon.innerHTML = `
    <p style="color:white;"><br>
        <strong> # </strong> ${pokemon.number}<br>
        <strong> Tipo: </strong> ${pokemon.type}<br>
        <img src="${pokemon.ThumbnailImage}"/>
        <strong> Nombre: </strong> ${pokemon.name}<br>
        <strong> Debilidades: </strong> ${pokemon.weakness}<br>
        
    </p>`;
  }
}
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

function search() {
  let searchInput = document.getElementById("search_input");
  
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

  let pokemon = searchPokemon(searchInput.value);
  displayPokemon(pokemon);
}
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

function searchPokemon(name){
  for (let i = 0; i < pokemons.length; i++){
    let nombreMayuscula = pokemons[i].name;
    console.log(nombreMayuscula.toLowerCase(), name.toLowerCase(), nombreMayuscula.toLowerCase() == name.toLowerCase());
    if(nombreMayuscula.toLowerCase() == name.toLowerCase()) {
      currentPokemonI = i;
      return pokemons[i];
    }
  }
}
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */