import CharacterService from '../Services/CharacterService.js'
import { removeSmallest } from "../utils.js"


export default class CharacterController {
  constructor() {
    console.log("Hello from character controller")
  }

}

CharacterService.rollStatsStandard()