const ork = {
    hp: 250,
    stamina: 100,
    atack() {
        console.log(this.stamina - 30)
    }
}

ork.atack()

const brutal = ork.atack
brutal()
const brutalWithBinding = ork.atack.bind(ork)
brutalWithBinding()