async function fetchPokemonData(pokemonName){
    const response=await fetch('https://pokeapi.co/api/v2/pokemon/squirtle');
    const pokemonData=await response.json();
    return pokemonData;
        }
    document.addEventListener('DOMContentLoaded', async () => {
        const squirtleData=await fetchPokemonData('squirtle');
        const pokemonInfoElement=document.getElementById('pokemon-info');
    
        pokemonInfoElement.innerHTML=`
        <h2>${squirtleData.name}</h2>
        <img id="img" src ="${squirtleData.sprites.front_default}" alt="${squirtleData.name}">
        <h3>Abilities</h3>
        <ul>
        ${squirtleData.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
        </ul>
        <h3>Base Experience: </h3>
        <p>${squirtleData.base_experience}
        </p>
        `;
});