"use strict";

const url = "https://pokeapi.co/";
const botonBuscar = document.getElementById("search_button");
const containerPokemon = document.getElementById("container-pokemon");

botonBuscar.addEventListener("click", () => {
    showPokemon();
})

async function getPokemon() {
    let buscaPokemon = document.getElementById("search_input").value.toLowerCase();

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscaPokemon}`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error(error);
    }
}

async function showPokemon(){
    const pokemon = await getPokemon();

    containerPokemon.innerHTML = `
    <p style="color:white;"><br>
        <strong> # </strong> ${pokemon.id}<br>
        <strong> Tipo: </strong> ${pokemon.types[0].type.name}<br>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/><br>
        <strong> Nombre: </strong> ${pokemon.name}<br>
        <strong> Peso: </strong> ${pokemon.weight}<br>
        
    </p>`;



    return console.log(pokemon);
}