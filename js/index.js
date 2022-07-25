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

// bonus
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum eros id pulvinar ultricies. Maecenas turpis dui, ullamcorper nec urna et, ornare rutrum massa. Phasellus odio justo, elementum at erat vitae, ultrices convallis quam. Ut at egestas neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque semper tempus sem, non egestas diam tempor quis. Etiam consequat interdum iaculis. Nam nec tempor nulla. Morbi commodo mi felis, sit amet convallis massa posuere et. Vestibulum quam orci, pellentesque fringilla suscipit sed, lobortis in ipsum. Praesent sem tortor, posuere ac gravida et, consectetur ut sapien. Donec nec ullamcorper leo. Praesent vel commodo nibh, id aliquet dolor. Vivamus interdum tortor ut euismod bibendum. Nullam est libero, rutrum sagittis augue vel, mollis pharetra sapien. Morbi mollis odio sit amet egestas finibus. 

Donec eget condimentum leo. Suspendisse suscipit eget nisl vitae semper. Etiam leo velit, dignissim quis dolor gravida, elementum euismod enim. Suspendisse volutpat, dui non tristique fermentum, est libero dictum justo, non tristique leo velit vitae tortor. Praesent congue purus quis lorem efficitur, et pulvinar enim commodo. Sed semper sodales nisl at imperdiet. Nullam non tempus lacus. Curabitur sit amet ante dapibus, posuere nisl in, facilisis elit. Nam ac nibh pretium, laoreet ante ac, faucibus metus. Aliquam ac mattis mi. Nunc in pulvinar nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis varius est a odio porta, in auctor ligula tempus. Pellentesque consectetur mattis lectus ut fringilla. Aliquam faucibus malesuada fringilla. 

Maecenas condimentum purus nec arcu laoreet, in iaculis quam pellentesque. Praesent suscipit eros a eros cursus, quis consectetur arcu porttitor. Fusce vehicula tincidunt odio, a accumsan sapien dictum at. Maecenas in euismod tortor. Aliquam lacinia nisl vitae massa laoreet eleifend. Nulla ac luctus lacus, et fermentum ex. In massa risus, ultricies nec tempor ut, venenatis eu tellus. Fusce sit amet arcu quis felis volutpat mollis. Morbi a nulla iaculis, laoreet justo et, pharetra est.`

function countWords(str){
    return str.split(' ').filter(word => word !=='').length
}
function countEt(str){
    return str.split(' ').filter(word => word =='et').length
}
console.log(countWords(lorem))
console.log(countEt(lorem))

// bonus 2

function palindrom (str) {
    let reverseString= str.toUpperCase().split('').reverse().filter(word => word !==' ')
        splitStr = str.toUpperCase().split('').filter(word => word !==' ');
    
        console.log(reverseString)
        console.log(splitStr)
    if (reverseString === splitStr){
        return `it is a palindrom`
    }else{
        return `Sorry not sorry, this is not a palindrom`
    }
    
  }

  console.log(palindrom('Was it a car or a cat I saw'))