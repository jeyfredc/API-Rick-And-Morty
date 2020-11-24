import API from './api.js'
import Character from './character.js'
const api = new API()
const $characterContainer = document.querySelector('#character-container')
let currentCharacter= 1
const $characterImage =document.querySelector('#character-image-container')

$characterImage.addEventListener('click', async () => {
    const characterData = await api.getCharacter(++currentCharacter)
    new Character(characterData)
})

async function initApp(initCharacterId) {
    const characterData = await api.getCharacter(initCharacterId)
    console.log(characterData)
    new Character(characterData)
}
initApp(currentCharacter)
/* console.log(api.getCharacter(3)); */