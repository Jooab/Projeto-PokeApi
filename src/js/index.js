
import { renderPokemon } from "./screen.js"
const input = document.getElementById('input-search')
const searchBar = document.getElementById('search-bar')
const leftArrow = document.getElementById('left-arrow')
const rightArrow = document.getElementById('right-arrow')

let selectedPokemon = 1

export async function getData(pokemon) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(apiUrl)
    if (response.status === 200) {
        const data = response.json()
        return data
    }
}

searchBar.addEventListener('submit', async (event) => {
    event.preventDefault()
    const pokemon = input.value.toLowerCase()
    const data = await getData(pokemon)
    if (data) {
        selectedPokemon = data.id
    }
    renderPokemon(pokemon)
})

rightArrow.addEventListener('click', () => {
    selectedPokemon += 1
    renderPokemon(selectedPokemon)
})

leftArrow.addEventListener('click', () => {
    if (selectedPokemon > 1) {
        selectedPokemon -= 1
        renderPokemon(selectedPokemon)
    }
})

renderPokemon(selectedPokemon)

