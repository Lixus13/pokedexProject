  class Pokemon {
  constructor(name) {
    this.name = name
    this.hp = null
    this.atk = null
    this.def = null
    this.weight = null
    this.height = null
    this.abilities = []
    this.moveset = []
  }
}

class Trainer {
  constructor(name) {
    this.name = name
    this.team = []
  }
  all = () => {
    return this.team
  }
  get = () => {
    for (let i = 0; i < this.team.length; i++) {
      if (name == this.team[i].name) {
        return this.team[i]
      }
    }
  }

}

  let trainer = new Trainer()
