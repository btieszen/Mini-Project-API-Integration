async function fetchPokemonData(pokemonName){
    const response=await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
    const pokemonData=await response.json();
    return pokemonData;
        }
    document.addEventListener('DOMContentLoaded', async () => {
        const charmanderData=await fetchPokemonData('charmander');
        const pokemonInfoElement=document.getElementById('pokemon-info');
    
        pokemonInfoElement.innerHTML=`
        <h2>${charmanderData.name}</h2>
        <img id="img" src ="${charmanderData.sprites.front_default}" alt="${charmanderData.name}">
        <h3>Abilities</h3>
        <ul>
        ${charmanderData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <h3>Base Experience: </h3>
        <p>${charmanderData.base_experience}
        </p>
        `;
});