//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// const { setGlobalDispatcher } = require("undici-types")

// Del 1: Lag karakter og lagre karakteren i localStorage
const nameInput = document.getElementById("character-name");
const hpInput = document.getElementById("character-hp");
const attackInput = document.getElementById("attack-damage");
const characterImageChoice = document.getElementsByClassName("profile-pics");
const createButton = document.getElementById("create-character");
let chosenImg = ''
console.log(nameInput.value);

document.querySelectorAll("img").forEach(function (img) {
    img.onclick = function () {
      chosenImg = this.alt;
    };
  });

const makeCharacter = () => {
  const playerCharacter = {
    name: nameInput.value,
    hp: hpInput.value,
    attack: attackInput.value,
    profileImg: chosenImg
  };
  localStorage.setItem("playerCharacter", JSON.stringify(playerCharacter));
};



createButton.addEventListener("click", makeCharacter);

//Seksjon 2: Generer fiende
const generateEnemy = document.getElementById('generate-enemy')


const randomizer = (maxValue) =>{
    return Math.floor(Math.random()* maxValue)
}
const enemyName = () =>{
    if (randomizer(3) === 0){
        return 'Goblin'
    }
    else if (randomizer(3)=== 1){
        return 'Ork'
    }
    else {return 'Drage'}
}

const enemyImg = () =>{
    if (randomizer(3) === 0){
        return "./assets/dragon.jpg"
    }
    else if (randomizer(3)=== 1){
        return "./assets/monster.jpg"
    }
    else {return "./assets/swamp-monster.jpg"}
}
console.log(enemyImg());


const makeEnemy = () =>{
const enemyCharacter = {
    name: enemyName(),
    enemyPic:enemyImg(),
    enemyHp: randomizer(101)+50,
    enemyAttack: randomizer(31)+10
}
document.getElementById("enemy-name").innerHTML = "Name: " + enemyCharacter.name
document.getElementById("enemy-img").src = enemyCharacter.enemyPic
document.getElementById("enemy-hp").innerHTML = "HP: "+ enemyCharacter.enemyHp
document.getElementById("enemy-attack").innerHTML = "Attack: "+ enemyCharacter.enemyAttack
 
localStorage.setItem("enemyCharacter", JSON.stringify(enemyCharacter))
}
generateEnemy.addEventListener("click",makeEnemy)

// Seksjon 3: Sloss!

//Legge inn heltene fra localStorage og vise dem i HTML


//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.
