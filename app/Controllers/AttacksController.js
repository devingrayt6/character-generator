import _attackService from "../Services/AttacksService.js"
import _store from "../store.js"

function _draw() {
  let dropElem = document.getElementById("attack-dropdown").innerHTML;
  let dropTemplate = "";
  let attacks = _store.State.attacks;
  attacks.forEach(attack => { dropTemplate += attack.DropTemplate })
  dropElem = dropTemplate;

}
export default class AttackController {
  constructor() {
    console.log("The attack controller works!");
  }
  displayDescription(name) {

  }
}