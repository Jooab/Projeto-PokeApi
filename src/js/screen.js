const pokemonImage = document.getElementById('pokemon-image')
const pokemonName = document.getElementById('pokemon-name')
const pokemonType = document.getElementById('pokemon-type')
const pokemonMoves = document.getElementById('pokemon-moves')
const input = document.getElementById('input-search')

import { getData } from "./index.js"

export async function renderPokemon(pokemon) {

    pokemonName.textContent = 'Loading...'
    pokemonMoves.style.display = "none"
    pokemonType.style.display = "none"
    pokemonImage.style.display = "none"

    const data = await getData(pokemon)

    if (data) {
        pokemonImage.style.display = 'block'
        pokemonType.style.display = 'block'
        pokemonMoves.style.display = "flex"
        input.value = ""

        const pokemonGif = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

        if (pokemonGif === null) {
            pokemonImage.src = 'src/imagens/pokemon-desconhecido.png'
        }
        else {
            pokemonImage.src = pokemonGif
        }

        pokemonName.textContent = `${data.name}`
        pokemonType.textContent = `${data.types[0].type.name}`

        switch (data.types[0].type.name) {
            case 'grass':
                pokemonType.style.backgroundColor = "#3fa129"
                break
            case 'fire':
                pokemonType.style.backgroundColor = "#e62829"
                break
            case 'water':
                pokemonType.style.backgroundColor = "#2980ef"
                break
            case 'electric':
                pokemonType.style.backgroundColor = "#fac000"
                break
            case 'ghost':
                pokemonType.style.backgroundColor = "#704170"
                break
            case 'fairy':
                pokemonType.style.backgroundColor = "#ef70ef"
                break
            case 'dragon':
                pokemonType.style.backgroundColor = "#5060e1"
            case 'fighting':
                pokemonType.style.backgroundColor = "#ff8000"
                break
            case 'flying':
                pokemonType.style.backgroundColor = "#81b9ef"
                break
            case 'normal':
                pokemonType.style.backgroundColor = "#9fa19f"
                break
            case 'poison':
                pokemonType.style.backgroundColor = "#9141cb"
                break
            case 'ground':
                pokemonType.style.backgroundColor = "#915121"
                break
            case 'psychic':
                pokemonType.style.backgroundColor = "#ef4179"
                break
            case 'rock':
                pokemonType.style.backgroundColor = "#afa981"
                break
            case 'ice':
                pokemonType.style.backgroundColor = "#3dcef3"
                break
            case 'bug':
                pokemonType.style.backgroundColor = "#91a119"
                break
            case 'dark':
                pokemonType.style.backgroundColor = "#624d4e"
                break
            case 'steel':
                pokemonType.style.backgroundColor = "#60a1b8"
                break
        }  

        let fourMoves = data.moves.slice(0, 4)
        pokemonMoves.innerHTML = ` <h2>Moves</h2 >
                <ul class="pokemon-moves-list" id="pokemon-moves-list">
                    <li>${fourMoves[0].move.name}</li>
                    <li>${fourMoves[1].move.name}</li>
                    <li>${fourMoves[2].move.name}</li>
                    <li>${fourMoves[3].move.name}</li>
                </ul>`

    } else {
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Pokemon not found';
        pokemonType.style.display = "none"
        pokemonMoves.style.display = "none"
        input.value = ""
    }
}