let senpaiArray = []

queryPokemonAPI =  async () => {
  let x = prompt('Enter PokeName or PokeNumber')
  let req =  await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`)
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
  let generate = document.createElement('ul')
  document.body.appendChild(generate)
  generate.setAttribute("id", "generator_id");
  generate.innerHTML= `<img src = "${pokemon.link}" width="150px" height="150px">
                        <li> ${pokemon.name}</li>
                        <li> Pokemon HP: ${pokemon.stats.hp}</li>
                        <li>Pokemon DEF: ${pokemon.stats.def}</li>
                        <li>Pokemon ATK: ${pokemon.stats.atk}</li>
                        <li>Pokemon Abilities: ${pokemon.abl[0]} </li>
                      `
}
