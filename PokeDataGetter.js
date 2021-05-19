
var fs = require('fs');
const fetch = require('node-fetch')

function typeGetter(name){
   fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(res => res.types.map(name => name.type.name))
        .then(res => JSON.stringify(res))
        .then(res => fs.appendFileSync('/home/tracericholson/Documents/USSF_Supra_Coder/type-data.txt', res))
}


typeGetter('ditto')