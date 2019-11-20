let senpaiArray = []

queryPokemonAPI =  async () => {
  let x = prompt('Enter Number')
  let req =  await fetch(`https://fizal.me/pokeapi/api/v2/id/${x}.json`)
  let data =  await req.json()
  let pokemon = {
    name: data.name,
    link: data.sprites.front_default,
    stats: {
      hp: data.stats[5].base_stat,
      atk: data.stats[4].base_stat,
      def: data.stats[3].base_stat
    },
    abl: [data.abilities[0].ability.name]
  }
  console.log(data);
  senpaiArray.push(pokemon)
  createPkmn(pokemon)
}

createPkmn = (pokemon) => {
  let generate = document.createElement('div')
  document.body.appendChild(generate)
  generate.classname="generator"
  generate.innerHTML= `<img src = "${pokemon.link}" width="150px" height="150px">
                        <p> ${pokemon.name}</p>
                        <p> Pokemon HP: ${pokemon.stats.hp}
                        Pokemon DEF: ${pokemon.stats.def}
                        Pokemon ATK: ${pokemon.stats.atk}
                        Pokemon Abilities: ${pokemon.abl[0]} </p>
                      `
}
