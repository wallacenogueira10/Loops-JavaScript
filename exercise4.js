const prompt = require('prompt-sync')()

let calmPeople = 0
let nervousWomen = 0
let agressiveMen = 0
let calmOthers = 0
let nervousPeopleOver40 = 0
let calmPeopleUnder18 = 0
let Nperson = 1

let age
let humor
let sex

while (Nperson <= 3) {
    age = parseInt(prompt(`Qual é a idade da ${Nperson}° pessoa? `))

    console.clear()

    console.log(`1 - Feminino`)
    console.log(`2 - Masculino`)
    console.log(`3 - Outros`)
    sex = parseInt(prompt(`Qual é o sexo da ${Nperson}° pessoa? `))

    console.clear()

    console.log(`1 - Calma`)
    console.log(`2 - Nervosa`)
    console.log(`3 - Agressiva`)
    humor = parseInt(prompt(`Qual é o humor da ${Nperson}° pessoa? `))

    console.clear()

    if (humor == 1) {
        calmPeople++
    }

    if (humor == 2 && sex == 1) {
        nervousWomen++
    }
    if (humor == 3 && sex == 2) {
        agressiveMen++
    }
    if (humor == 1 && sex == 3) {
        calmOthers++
    }
    if (humor == 2 && age > 40) {
        nervousPeopleOver40++
    }
    if (humor == 1 && age < 18) {
        calmPeopleUnder18++
    }

    Nperson++
}

console.log(`O número de pessoas calmas é: ${calmPeople}`)
console.log(`O número de mulheres nervosas é: ${nervousWomen}`)
console.log(`O número de homens agressivos é: ${agressiveMen}`)
console.log(`O número de outros calmos é: ${calmOthers}`)
console.log(`O número de pessoas nervosas com mais de 40 anos é: ${nervousPeopleOver40}`)
console.log(`O número de pessoas calmas com menos de 18 anos é: ${calmPeopleUnder18}`)