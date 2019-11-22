class Pokemon {
  constructor(name, abilities) {
    this.name = name
    this.hp = null
    this.atk = null
    this.def = null
    this.abilities = []
  }
}

class Trainer {
  constructor(name, team) {
    this.name = name
    this.team = []
  }
}


let trainer = new Trainer()
