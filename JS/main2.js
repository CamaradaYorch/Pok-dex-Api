"use strict";

const url = "https://pokeapi.co/";
const botonBuscar = document.getElementById("search_button");
const containerPokemon = document.getElementById("container-pokemon");
const btnSigPokemon = document.getElementById("next");
const btnPrvPokemon = document.getElementById("previous");

// btnSigPokemon.addEventListener("click", () => {
//     nextPokemon();
// })

// btnPrvPokemon.addEventListener("click", () => {
//     previousPokemon();
// })

botonBuscar.addEventListener("click", () => {
    showPokemon();
})

async function getPokemon(id) {

    if (id) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    } else {
        let buscaPokemon = document.getElementById("search_input").value.toLowerCase();

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}

async function showPokemon(id) {
    if (id) {
        const pokemon = await getPokemon(id);
        const divPokemonInfo = document.getElementById("container-pokemon-info");

        containerPokemon.innerHTML = `
        <p style="color:white;"><br>
            <strong> # </strong> ${pokemon.id}<br>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" width="70%" height="50%"/><br>  
        </p>`;

        const h1Nombre = document.createElement("h1");
        const nombrePokemon = document.createTextNode(`Nombre: ${pokemon.name}`);
        h1Nombre.appendChild(nombrePokemon);
        const pTipo = document.createElement("p");
        const tipoPokemon = document.createTextNode(`Tipo: ${pokemon.types[0].type.name}`);
        pTipo.appendChild(tipoPokemon);
        const pPeso = document.createElement("p");
        const peso = document.createTextNode(`Peso: ${pokemon.weight}`);
        pPeso.appendChild(peso);

        divPokemonInfo.appendChild(h1Nombre);
        divPokemonInfo.appendChild(pTipo);
        divPokemonInfo.appendChild(pPeso);

        return pokemon;
    }
    else {
        const pokemon = await getPokemon();

        const divPokemonInfo = document.getElementById("container-pokemon-info");

        containerPokemon.innerHTML = `
        <p style="color:white;"><br>
            <strong> # </strong> ${pokemon.id}<br>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" width="70%" height="50%"/><br>  
        </p>`;

        if(document.getElementById("nombrePokemon")){
            divPokemonInfo.removeChild(document.getElementById("nombrePokemon"));
            divPokemonInfo.removeChild(document.getElementById("tipoPokemon"));
            divPokemonInfo.removeChild(document.getElementById("pesoPokemon"));
        }
        const h1Nombre = document.createElement("h1");
        const nombrePokemon = document.createTextNode(`Nombre: ${pokemon.name}`);
        h1Nombre.id = "nombrePokemon";
        h1Nombre.appendChild(nombrePokemon);
        const pTipo = document.createElement("p");
        const tipoPokemon = document.createTextNode(`Tipo: ${pokemon.types[0].type.name}`);
        pTipo.id = "tipoPokemon";
        pTipo.appendChild(tipoPokemon);
        const pPeso = document.createElement("p");
        const peso = document.createTextNode(`Peso: ${pokemon.weight}`);
        pPeso.id = "pesoPokemon";
        pPeso.appendChild(peso);

        divPokemonInfo.appendChild(h1Nombre);
        divPokemonInfo.appendChild(pTipo);
        divPokemonInfo.appendChild(pPeso);

        return pokemon;
    }

}

async function nextPokemon() {

    let pokemon = getPokemon();
    showPokemon(pokemon.id++);
}
/* ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ ⚈ */

async function previousPokemon() {
    if (currentPokemonI == 0) return;
    currentPokemonI--;
    displayPokemon(pokemons[currentPokemonI]);
}