const prompt = require ('prompt-sync')()

let total21=0
let total50=0
let idade

do {
age = parseInt(prompt('digite sua idade'))

 if (idade<21) {
    total21++
 } else if (idade>50){
    total50++ 
}

} while (idade ! = -99)

console.log(`total de pessoas com menos de 21 foi ${total21++}`)
console.log(`total de pessoas com mais de 50 anos foi ${total50++}`)
