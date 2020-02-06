import Character from '../Models/Character.js';
import { removeSmallest } from '../utils.js'

class CharacterService {
  constructor() {
    console.log("Hello from character services")
  }

  rollStatsStandard() {

    for (let i = 0; i < 4; i++) {
      let roll = Math.floor((Math.random() * 6) + 1)
      var rollArray = []
      rollArray.push(roll)
    }
    removeSmallest(rollArray)
    let rollSum = 0
    for (let i = 0; i < rollArray.length; i++) {
      rollSum += rollArray[i]
    }
    console.log(rollSum)
    return rollSum
  }
}



const CHARACTERSERVICE = new CharacterService()

export default CHARACTERSERVICE