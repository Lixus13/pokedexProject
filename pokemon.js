  class Pokemon {
  constructor(name) {
    this.name = name
    this.hp = null
    this.atk = null
    this.def = null
    this.abilities = []
    this.moveset = []
  }
}

class Trainer {
  constructor(name) {
    this.name = name
    this.team = []
  }
}

  let trainer = new Trainer()
