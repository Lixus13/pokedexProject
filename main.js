

queryPokemonAPI =  async () => {
  let x = prompt('Enter PokeName')
  let req =  await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`)
  let data =  await req.json()
  let pokemon = new Pokemon()
    pokemon.name = data.name
    pokemon.id = data.id
    // pokemon.sprite =  data.sprites.front_default
    pokemon.sprite = `https://www.pkparaiso.com/imagenes/xy/sprites/animados/${x}.gif`
    pokemon.hp =  data.stats[5].base_stat
    pokemon.atk = data.stats[4].base_stat
    pokemon.def = data.stats[3].base_stat
    for(i = 0; i < data.abilities.length; i++) {
      pokemon.abilities.push(data.abilities[i].ability.name)
    }
    for(ii = 0; ii <= 5; ii++) {
      trainer.team.push(pokemon)
    }
    console.log(data);
    createPkmn(pokemon)
}


createPkmn = (pokemon) => {
  let stats = document.getElementById('stats')
  statistics = () => {
    stats.style.display = 'block'
  }


  let generate = document.createElement('ul')
  let pokemengs = document.getElementById('digimon')
  generate.setAttribute("id", "generator")
  generate.setAttribute("onclick", "statistics()")

  generate.innerHTML= `<img src = "${pokemon.sprite}">
                        <li> ${pokemon.id}. ${pokemon.name}</li>
                        `

  stats.innerHTML =     `
                        <h2><ul><b> PokéStats </b></ul></h2>
                        <li> Pokemon HP: ${pokemon.hp}</li>
                        <li>Pokemon ATK: ${pokemon.atk}</li>
                        <li>Pokemon DEF: ${pokemon.def}</li>
                        <li>Pokemon Abilities: ${pokemon.abilities} </li>
                        <li>Price: ¥3,000,000.00</li>
                          `

                      pokemengs.appendChild(generate)
// var(math.random()-constant)*scale
}
