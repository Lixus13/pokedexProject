let senpaiArray = []


queryPokemonAPI =  async () => {
  var x = prompt('Enter PokeName or PokeNumber'),
   req =  await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`),
   data =  await req.json(),
   pokemon = {
     name: data.name,
     link: data.sprites.front_default,
     stats: {
      hp: data.stats[5].base_stat,
      atk: data.stats[4].base_stat,
      def: data.stats[3].base_stat
      },
     ablt: function {
     for (let i = 0; i <= array.length; i++) {

      }
     }
  }
  console.log(data)
  document.getElementById("stats").innerHTML = txt;
  senpaiArray.push(pokemon.name)


}

// createPkmn = (pokemon) => {
//   let generate = document.createElement('ul')
//   generate.setAttribute("id", "generator_id");
//   generate.innerHTML= `<img src = "${pokemon.link}" width="150px" height="150px">
//                         <li> ${pokemon.name}</li>
//                         <li> Pokemon HP: ${pokemon.stats.hp}</li>
//                         <li>Pokemon DEF: ${pokemon.stats.def}</li>
//                         <li>Pokemon ATK: ${pokemon.stats.atk}</li>
//                         <li>Pokemon Abilities: ${pokemon.ablt}</li>
//                       `
//   document.body.appendChild(generate)
// }
