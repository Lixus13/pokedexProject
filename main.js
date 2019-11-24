trainerArray = new Array('https://archives.bulbagarden.net/media/upload/9/9a/Spr_B2W2_Red.png','https://archives.bulbagarden.net/media/upload/f/f4/Spr_B2W2_Blue.png','https://archives.bulbagarden.net/media/upload/e/ed/Spr_B2W2_Misty.png','https://archives.bulbagarden.net/media/upload/1/1c/Spr_B2W2_Brock.png','https://archives.bulbagarden.net/media/upload/a/ae/Spr_B2W2_Lance.png','https://archives.bulbagarden.net/media/upload/0/0c/Spr_B2W2_Erika.png','https://archives.bulbagarden.net/media/upload/3/30/Spr_B2W2_Flannery.png', 'https://archives.bulbagarden.net/media/upload/1/11/Spr_B2W2_Blaine.png','https://archives.bulbagarden.net/media/upload/1/18/Spr_B2W2_Caitlin.png','https://archives.bulbagarden.net/media/upload/5/57/Spr_B2W2_Clair.png','https://archives.bulbagarden.net/media/upload/5/5b/Spr_HGSS_Burglar.png', 'https://archives.bulbagarden.net/media/upload/6/6f/Spr_B2W2_Janine.png', 'https://archives.bulbagarden.net/media/upload/1/18/Spr_HGSS_Koga.png',"https://archives.bulbagarden.net/media/upload/f/f7/Spr_B2W2_Benga.png", "https://archives.bulbagarden.net/media/upload/8/83/Spr_B2W2_Cynthia.png", "https://archives.bulbagarden.net/media/upload/d/df/Spr_B2W2_Lt_Surge.png", 'https://archives.bulbagarden.net/media/upload/9/97/Spr_B2W2_Twins.png', 'https://archives.bulbagarden.net/media/upload/8/82/Spr_B2W2_Swimmer_F.png', 'https://archives.bulbagarden.net/media/upload/9/96/Spr_B2W2_Shadow_Triad.png', 'https://archives.bulbagarden.net/media/upload/5/57/Spr_B2W2_Marlon.png', 'https://archives.bulbagarden.net/media/upload/c/c2/Spr_B2W2_Fisherman.png', 'https://archives.bulbagarden.net/media/upload/5/5f/Spr_B2W2_Pok%C3%A9mon_Ranger_F.png', 'https://archives.bulbagarden.net/media/upload/f/f8/Spr_B2W2_Rood.png', 'https://archives.bulbagarden.net/media/upload/7/78/Spr_B2W2_Scientist_F.png');
i = 0;

function trainerFunction()
    {
     i++;
    document.getElementById("trainerSprite").src = trainerArray[i];
    if( i == trainerArray.length-1) {
   i = -1;
    }
}

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

  stats.innerHTML =    `<h2><b><u> PokéStats</u></b></h2>
                        <li> ${pokemon.id}. ${pokemon.name}</li>
                        <li> Pokemon HP: ${pokemon.hp}</li>
                        <li>Pokemon ATK: ${pokemon.atk}</li>
                        <li>Pokemon DEF: ${pokemon.def}</li>
                        <li>Pokemon Abilities: ${pokemon.abilities} </li>`

  moves.innerHTML =     `<h2><b><u>PokéMoves</u></b></h2>
                        <li> ${pokemon.moveset} </li>
                        `


                      pokemengs.appendChild(generate)

}
