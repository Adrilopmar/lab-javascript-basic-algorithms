// Iteration 1: Names and Input
const hacker1 = "Charmander",
      hacker2 = "Bulbasaur";

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has  ${hacker1} characters`)
}else if(hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}
else{
    console.log(`The driver has the longest name, it has  ${hacker2} characters`)
}
// Iteration 3: Loops
let uppercase =hacker1.split('').join(' ').toUpperCase()
console.log(uppercase)
let reverse = hacker1.split('').reverse().join('')
console.log(reverse)
let reverse2 = hacker2.split('').reverse().join('')

let arrayReversedNames=[reverse,reverse2].sort()
console.log(` The driver's name goes first. ${arrayReversedNames[0]}`)


