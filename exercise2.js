const PromptSync = require('prompt-sync'){}:
let number 
let npares = 0
let nimpares = 0

for (let n= 0; n<=10; n++){
number =parseInt(prompt('digite um numero '))
}

if(number % 2 == 0){
    npares++
console.log('este numero é par')
}  
else{
 nimpares++

}

console.log (`a quantidade de numero pares foi: ${npares} e a quantidade de numeros ímpares foi: ${nimpares}`)
