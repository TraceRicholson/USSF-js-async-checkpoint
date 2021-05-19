
//THIS WORKS SEPARATELY
const fs = require('fs')
const fetch = require('node-fetch')
let input = '/home/tracericholson/Documents/USSF_Supra_Coder/input.txt'
function stringyPokemon(input) {
  fs.readFile('input.txt', 'utf-8', (err, data) => {
if (err) throw err
console.log(data)
return data;
})
}

console.log(stringyPokemon())

// How to link..?


// THIS WORKS SEPARATELY
function typeGetter(stringyPokemon){
  fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
       .then(response => response.json())
       .then(res => res.types.map(name => name.type.name))
       .then(res => JSON.stringify(res))
       .then(res => fs.appendFileSync('input.txt', res))
}

console.log(typeGetter())