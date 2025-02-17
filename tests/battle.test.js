// Her kan du skrive testene dine
const { TestEnvironment } = require("jest-environment-jsdom");
const {randomizer, makeEnemy, enemyName} = require("../app.js")


test("Forventer at radomizer skal gi et tall mindre enn parameteret", () =>{
    expect(randomizer(3)).toBeLessThan(3)
})



  
