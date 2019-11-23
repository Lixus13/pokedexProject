

queryPokemonAPI =  async () => {
  let x = prompt('Enter PokéName')
  let req =  await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`)
  let data =  await req.json()
  let pokemon = new Pokemon()
    pokemon.name = data.name
    pokemon.id = data.id
    pokemon.sprite = `https://www.pkparaiso.com/imagenes/xy/sprites/animados/${x}.gif`
    pokemon.hp =  data.stats[5].base_stat
    pokemon.atk = data.stats[4].base_stat
    pokemon.def = data.stats[3].base_stat
    for(i = 0; i < data.abilities.length; i++) {
      pokemon.abilities.push(data.abilities[i].ability.name)
    }
    for(ii = 0; ii < data.moves.length; ii++) {
      pokemon.moveset.push(data.moves[ii].move.name)
    }
    for(iii = 0; iii <= 0; iii++) {
      trainer.team.push(pokemon)
    }
    console.log(data);
    createPkmn(pokemon)
}

createPkmn = (pokemon) => {
  let generate = document.createElement('ul')
  let movemaker = document.createElement('ul')
  let stats = document.getElementById('stats')
  let moves = document.getElementById('moves')
  let pokemengs = document.getElementById('digimon')

  // statistics = () => {
  //   if (stats.style.display == 'none') {
  //     stats.style.display = 'block'
  //   }
  //   else {
  //     stats.style.display = 'none'
  //   }
    movesets = () => {
      if (moves.style.display == 'none') {
        moves.style.display = 'block'
      }
      else {
        moves.style.display = 'none'
      }
    }

  generate.setAttribute("class", "generator");
  generate.setAttribute("onclick", "movesets()");



  generate.innerHTML= `<img src = "${pokemon.sprite}">
                        <li> ${pokemon.name}</li>`

  stats.innerHTML =    `<h2><b> PokéStats</b></h2>
                        <li> ${pokemon.id}. ${pokemon.name}</li>
                        <li> Pokemon HP: ${pokemon.hp}</li>
                        <li>Pokemon ATK: ${pokemon.atk}</li>
                        <li>Pokemon DEF: ${pokemon.def}</li>
                        <li>Pokemon Abilities: ${pokemon.abilities} </li>`

  moves.innerHTML =     `<h2><b> PokéMoves </b></h2>
                        <li> ${pokemon.moveset} </li>
                        `


                      pokemengs.appendChild(generate)

}
