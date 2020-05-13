let nombre = prompt('Welcome! Enter your name Trainer!')
let trainerselect = document.getElementById('trainerselect')
let trainerNombre = document.createElement('h1')

trainerNombre.innerText = `${nombre}`
trainerselect.appendChild(trainerNombre)

trainerArray = new Array("images/Red.png",
"images/Blue.png", "images/Misty.png", "images/Brock.png", "images/Erika.png", "images/Giovanni.png", "images/Blaine.png", "images/Flannery.png", "images/Lance.png", "images/N.png", "images/Volkner.png", "images/Gardenia.png", "images/Caitlin.png", "images/Hilbert.png", "images/Hilda.png", "images/Jasmine.png", "images/Surge.png");
// 'https://archives.bulbagarden.net/media/upload/e/ed/Spr_B2W2_Misty.png','https://archives.bulbagarden.net/media/upload/1/1c/Spr_B2W2_Brock.png','https://archives.bulbagarden.net/media/upload/4/4e/Spr_B2W2_Hilbert_2.png', 'https://archives.bulbagarden.net/media/upload/7/78/Spr_B2W2_Hilda.png','https://archives.bulbagarden.net/media/upload/2/2c/Spr_B2W2_N.png','https://archives.bulbagarden.net/media/upload/9/9c/Spr_B2W2_Gardenia.png','https://archives.bulbagarden.net/media/upload/a/ae/Spr_B2W2_Lance.png','https://archives.bulbagarden.net/media/upload/0/0c/Spr_B2W2_Erika.png','https://archives.bulbagarden.net/media/upload/4/4c/Spr_B2W2_Volkner.png','https://archives.bulbagarden.net/media/upload/3/30/Spr_B2W2_Flannery.png', 'https://archives.bulbagarden.net/media/upload/1/17/Spr_B2W2_Giovanni.png', 'https://archives.bulbagarden.net/media/upload/6/62/Spr_B2W2_Jasmine.png', 'https://archives.bulbagarden.net/media/upload/1/11/Spr_B2W2_Blaine.png','https://archives.bulbagarden.net/media/upload/1/18/Spr_B2W2_Caitlin.png','https://archives.bulbagarden.net/media/upload/b/b1/Spr_B2W2_Dancer.png','https://archives.bulbagarden.net/media/upload/5/57/Spr_B2W2_Clair.png','https://archives.bulbagarden.net/media/upload/5/5b/Spr_HGSS_Burglar.png', 'https://archives.bulbagarden.net/media/upload/6/6f/Spr_B2W2_Janine.png', 'https://archives.bulbagarden.net/media/upload/1/18/Spr_HGSS_Koga.png','https://archives.bulbagarden.net/media/upload/6/6c/Spr_B2W2_Iris.png',"https://archives.bulbagarden.net/media/upload/f/f7/Spr_B2W2_Benga.png", "https://archives.bulbagarden.net/media/upload/8/83/Spr_B2W2_Cynthia.png", "https://archives.bulbagarden.net/media/upload/d/df/Spr_B2W2_Lt_Surge.png", 'https://archives.bulbagarden.net/media/upload/9/97/Spr_B2W2_Twins.png', 'https://archives.bulbagarden.net/media/upload/d/dc/Spr_B2W2_Roughneck.png', 'https://archives.bulbagarden.net/media/upload/8/82/Spr_B2W2_Swimmer_F.png', 'https://archives.bulbagarden.net/media/upload/9/96/Spr_B2W2_Shadow_Triad.png', 'https://archives.bulbagarden.net/media/upload/5/57/Spr_B2W2_Marlon.png', 'https://archives.bulbagarden.net/media/upload/2/26/Spr_B2W2_Sabrina.png','https://archives.bulbagarden.net/media/upload/c/c2/Spr_B2W2_Fisherman.png', 'https://archives.bulbagarden.net/media/upload/5/5f/Spr_B2W2_Pok%C3%A9mon_Ranger_F.png', 'https://archives.bulbagarden.net/media/upload/f/f8/Spr_B2W2_Rood.png', 'https://archives.bulbagarden.net/media/upload/7/78/Spr_B2W2_Scientist_F.png', 'https://archives.bulbagarden.net/media/upload/a/a6/Spr_B2W2_Hoopster.png'
i = 0;

function trainerFunction()  {
  ++i;
  if (i == trainerArray.length) {
    i = 0;
  }
  document.getElementById("trainerSprite").src = trainerArray[i];
}

queryPokemonAPI =  async () => {
  let pokemonPromptResult = prompt('Enter a Pokémon name to add to your team...')
  let pokemonChoice = pokemonPromptResult.toLowerCase()
  let req =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonChoice}/`)
  if (req.status == 404) {
    alert(`${pokemonChoice} is not a valid Pokémon!`)
    return
  }
  let data =  await req.json()
  let pokemon = new Pokemon(data.name)
    pokemon.id = data.id
    pokemon.sprite = `https://www.pkparaiso.com/imagenes/xy/sprites/animados/${pokemonChoice}.gif`
    pokemon.hp =  data.stats[5].base_stat
    pokemon.atk = data.stats[4].base_stat
    pokemon.def = data.stats[3].base_stat
    pokemon.height = data.height
    pokemon.weight = data.weight
    for(i = 0; i < data.abilities.length; i++) {
      pokemon.abilities.push(data.abilities[i].ability.name)
    }
    for(ii = 0; ii < 4; ii++) {
      pokemon.moveset.push(data.moves[ii].move.name)
    }
    for(iii = 0; iii <= 0; iii++) {
      trainer.team.push(pokemon)
    }
    if (trainer.team.length < 7) {
      createPkmn(pokemon)
    }
    else {
      alert('Team is full!')
    }
    console.log(data);
}

createPkmn = (pokemon) => {
  let generate = document.createElement('ul')
  let movemaker = document.createElement('ul')
  let stats = document.getElementById('stats')
  let moves = document.getElementById('moves')
  let pokemonContainer = document.getElementById('pokemonfinder')

    movesets = () => {
      if (moves.style.display == 'block') {
        moves.style.display = 'none'
      }
      else {
        moves.style.display = 'block'
      }
    }

    generate.setAttribute("class", "generator");
    generate.setAttribute("onclick", "movesets()");
  generate.innerHTML= `<img src = ${pokemon.sprite}>
                        <li> ${pokemon.name}</li>`

  stats.innerHTML =    `<button type="button" id="btn" class="action-button animate shadow deets">PokéStats</button>
                        <li> ${pokemon.id}. ${pokemon.name}</li>
                        <li>Pokémon HP: ${pokemon.hp}</li>
                        <li>Pokémon ATK: ${pokemon.atk}</li>
                        <li>Pokémon DEF: ${pokemon.def}</li>
                        <li>Pokémon Weight: ${pokemon.weight} lbs</li>
                        <li>Pokémon Abilities: ${pokemon.abilities} </li>`

  moves.innerHTML =     `  <button type="button" id="btn" onclick="" class="action-button animate shadow deets">PokéMoves</button>
                        <li> ${pokemon.moveset} </li>
                        `
                      pokemonContainer.appendChild(generate)
}
