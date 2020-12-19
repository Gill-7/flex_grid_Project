async function pokedex() {
    let response = await fetch('pokemon.json')
    let data = await response.json()
    return data
}


function allPokemon(data) {
    return `
    <div class='b-pokemon'>
       <div class='a-pokemon-id'>${data.id}</div>
       <div class='a-pokemon-name'><span>Name:</span> ${data.name.english}</div>
       <div class='a-pokemon-name'><span>Nom:</span> ${data.name.french}</div>
       <div class='a-pokemon-type'><span>Type:</span> ${data.type.join(' / ')}</div>
    </div>
    `
}

pokedex().then(info => {
    document.body.innerHTML = `
    <div class='a-pokemon'>
       ${info.map(allPokemon).join('')}
    </div>
    `
})

