//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// const { setGlobalDispatcher } = require("undici-types")

// Del 1: Lag karakter og lagre karakteren i localStorage
const nameInput = document.getElementById("character-name")
const hpInput = document.getElementById("character-hp")
const attackInput = document.getElementById("attack-damage")
const characterImageChoice = document.getElementById("Bilde 1")
console.log(nameInput.value);



const makeCharacter =() => {
const playerCharacter = {
    name: nameInput.value,
    hp: hpInput.value,
    attack: attackInput.value
}
localStorage.setItem('playerCharacter',JSON.stringify(playerCharacter))
}




//Seksjon 2: Generer fiende

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.
