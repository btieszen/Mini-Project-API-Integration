async function fetchPokemonData(pokemonName){
    const response=await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    const pokemonData=await response.json();
    return pokemonData;
        }
    document.addEventListener('DOMContentLoaded', async () => {
        const bulbasaurData=await fetchPokemonData('bulbasaur');
        const pokemonInfoElement=document.getElementById('pokemon-info');
    
        pokemonInfoElement.innerHTML=`
        <h2>${bulbasaurData.name}</h2>
        <img id="img" src ="${bulbasaurData.sprites.front_default}" alt="${bulbasaurData.name}">
        <h3>Abilities</h3>
        <ul>
        ${bulbasaurData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <h3>Base Experience: </h3>
        <p>${bulbasaurData.base_experience}
        </p>
        `;
});