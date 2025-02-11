//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// const { setGlobalDispatcher } = require("undici-types")

// Del 1: Lag karakter og lagre karakteren i localStorage
const nameInput = document.getElementById("character-name");
const hpInput = document.getElementById("character-hp");
const attackInput = document.getElementById("attack-damage");
const characterImageChoice = document.getElementsByClassName("profile-pics");
const createButton = document.getElementById("create-character");
let chosenImg = "";
console.log(nameInput.value);

document.querySelectorAll("img").forEach(function (img) {
  img.onclick = function () {
    chosenImg = this.src;
  };
});

const makeCharacter = () => {
  const playerCharacter = {
    name: nameInput.value,
    hp: hpInput.value,
    attack: attackInput.value,
    profileImg: chosenImg,
  };
  localStorage.setItem("playerCharacter", JSON.stringify(playerCharacter));
  showCharacter();
};

const showCharacter = () => {
  let collectedPlayer = localStorage.getItem("playerCharacter");
  collectedPlayer = JSON.parse(collectedPlayer);
  const battleArea = document.getElementById("battle-area");

  const displayExist = document.getElementById("character-display");
  if (displayExist) {
    displayExist.remove();
  }

  let characterDisplay = document.createElement("div");
  characterDisplay.id = "character-display";
  characterDisplay.classList = "profile-card";

  battleArea.appendChild(characterDisplay);

  let displayH2 = document.createElement("h2");
  displayH2.innerText = "Helten";

  let displayImg = document.createElement("img");
  displayImg.id = "char-img";
  displayImg.alt = "Profilbilde";
  displayImg.src = collectedPlayer.profileImg;

  let charNameP = document.createElement("p");
  charNameP.id = "char-name";
  charNameP.innerText = collectedPlayer.name;

  let charHpP = document.createElement("p");
  charHpP.id = "char-hp";
  charHpP.innerText = "Hp: " + collectedPlayer.hp;

  let charAttackP = document.createElement("p");
  charAttackP = "char-attack";
  charAttackP = "Attack: " + collectedPlayer.attack;

  characterDisplay.append(
    displayH2,
    displayImg,
    charNameP,
    charHpP,
    charAttackP
  );
  clearFightSpace()
};

createButton.addEventListener("click", makeCharacter);

//Seksjon 2: Generer fiende
const generateEnemy = document.getElementById("generate-enemy");

const randomizer = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};
const enemyName = () => {
  if (randomizer(3) === 0) {
    return "Goblin";
  } else if (randomizer(3) === 1) {
    return "Ork";
  } else {
    return "Drage";
  }
};

const enemyImg = () => {
  if (randomizer(3) === 0) {
    return "./assets/dragon.jpg";
  } else if (randomizer(3) === 1) {
    return "./assets/monster.jpg";
  } else {
    return "./assets/swamp-monster.jpg";
  }
};
console.log(enemyImg());

const makeEnemy = () => {
  const enemyCharacter = {
    name: enemyName(),
    enemyPic: enemyImg(),
    enemyHp: randomizer(101) + 50,
    enemyAttack: randomizer(31) + 10,
  };

  localStorage.setItem("enemyCharacter", JSON.stringify(enemyCharacter));
  showEnemy();
  clearFightSpace()
};

const showEnemy = () => {
  let collectedEnemy = localStorage.getItem("enemyCharacter");
  collectedEnemy = JSON.parse(collectedEnemy);
  const battleArea = document.getElementById("battle-area");

  const displayExist = document.getElementById("enemy-fight-display");
  if (displayExist) {
    displayExist.remove();
  }

  let enemyDisplay = document.createElement("div");
  enemyDisplay.id = "enemy-fight-display";
  enemyDisplay.classList = "profile-card";

  battleArea.appendChild(enemyDisplay);

  let displayH2 = document.createElement("h2");
  displayH2.innerText = "Fiende";

  let displayImg = document.createElement("img");
  displayImg.id = "enemy-fight-img";
  displayImg.alt = "Fiendens profilbilde";
  displayImg.src = collectedEnemy.enemyPic;

  let enemyNameP = document.createElement("p");
  enemyNameP.id = "enemy-fight-name";
  enemyNameP.innerText = collectedEnemy.name;

  let enemyHpP = document.createElement("p");
  enemyHpP.id = "enemy-fight-hp";
  enemyHpP.innerText = "Hp: " + collectedEnemy.enemyHp;

  let enemyAttackP = document.createElement("p");
  enemyAttackP = "enemy-fight-attack";
  enemyAttackP = "Attack: " + collectedEnemy.enemyAttack;

  enemyDisplay.append(
    displayH2,
    displayImg,
    enemyNameP,
    enemyHpP,
    enemyAttackP
  );
};

generateEnemy.addEventListener("click", makeEnemy);

// Seksjon 3: Sloss!
const startFight = document.getElementById("start-fight");

const fight = () => {
  let collectedPlayer = localStorage.getItem("playerCharacter");
  collectedPlayer = JSON.parse(collectedPlayer);
  let collectedEnemy = localStorage.getItem("enemyCharacter");
  collectedEnemy = JSON.parse(collectedEnemy);
  const remainingPlayerHp = collectedPlayer.hp - collectedEnemy.enemyAttack;
  const remainingEnemyHp = collectedEnemy.enemyHp - collectedPlayer.attack;
  const battleResult = document.getElementById("battle-result");
  

  if (remainingPlayerHp > remainingEnemyHp) {
    battleResult.innerText = `Du vant! Du har ${remainingPlayerHp}HP igjen og fienden har kun ${remainingEnemyHp}HP igjen.`;
  } else if (remainingPlayerHp < remainingEnemyHp) {
    battleResult.innerText = `Du tapte! Du har kun  ${remainingPlayerHp}HP igjen og fienden har ${remainingEnemyHp}HP igjen.`;
  } else {
    battleResult.innerText = `Uavgjort! Dere har begge ${remainingPlayerHp}HP igjen`;
  }
};
startFight.addEventListener("click", fight);

const clearFightSpace = () =>{
    const resultExist = document.getElementById("battle-result");
    if (resultExist) {
      resultExist.innerText =""
}}

//Legge inn heltene fra localStorage og vise dem i HTML

//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.
