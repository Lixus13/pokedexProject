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
  constructor(name) {
    this.name = name
  }
}


let trainer = new Trainer()
