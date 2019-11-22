


queryPokemonAPI =  async () => {
  let x = prompt('Enter PokeName or PokeNumber')
  let req =  await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`)
  let data =  await req.json()
  let pokemon = new Pokemon()
    pokemon.name = data.name
    pokemon.sprite = data.sprites.front_default
    pokemon.hp =  data.stats[5].base_stat
    pokemon.atk = data.stats[4].base_stat
    pokemon.def = data.stats[3].base_stat
    for(i = 0; i < data.abilities.length; i++) {
      pokemon.abilities.push(data.abilities[i].ability.name)

    }
    console.log(data);
    createPkmn(pokemon)
}


createPkmn = (pokemon) => {
  let generate = document.createElement('ul')
  let pokeImg = document.getElementById('generator')
  var space = " "
  generate.setAttribute("id", "generator");
  generate.innerHTML= `<img src = "${pokemon.sprite}" width="150px" height="150px">
                        <li> ${pokemon.name}</li>
                        <li> Pokemon HP: ${pokemon.hp}</li>
                        <li>Pokemon ATK: ${pokemon.atk}</li>
                        <li>Pokemon DEF: ${pokemon.def}</li>
                        <li>Pokemon Abilities: ${pokemon.abilities}${space}  </li>
                      `
                      pokeImg.appendChild(generate)
}
