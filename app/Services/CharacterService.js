import Character from '../Models/Character.js';

class CharacterService {
  constructor() {
    console.log("Hello from character services")
  }

  rollStatsStandard() {

    for (let i = 0; i < 4; i++) {
      let roll = Math.floor((Math.random() * 6) + 1)
      console.log(roll)
    }


  }

}

const CHARACTERSERVICE = new CharacterService()

export default CHARACTERSERVICE