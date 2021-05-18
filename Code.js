var fs = require('fs');
const fetch = require('node-fetch');


const fs = require('fs')
const fetch = require('node-fetch')
fs.readFile('/home/tracericholson/Documents/USSF_Supra_Coder/USSF-js-async-checkpoint/input.txt', 'utf-8', (err, data) => {
if (err) throw err;
console.log(data);
})

// let inputName =
// async function getPokemon (inputName) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${inputName}`)
//  .then(response => response.json())
//  .then(data => console.log(data.abilities))
// }

---------------------------------------------------------------
// const fs = require('fs')
// const fetch = require('node-fetch')
// fs.readFile('Checkpoint/input.txt', 'utf-8', (err, data) => {
// if (err) throw err;
// console.log(data);
// })