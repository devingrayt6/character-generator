import _attackService from "../Services/AttacksService.js"
import _store from "../store.js"

function _drawDrop() {
  let dropElem = document.getElementById("attack-dropdown");
  let dropTemplate = "";
  let attacks = _store.State.attacks;
  attacks.forEach(attack => { dropTemplate += attack.DropTemplate })
  dropElem.innerHTML = dropTemplate;
}
function _drawDesc(name) {
  let descElem = document.getElementById("description-card");
  let attacks = _store.State.attacks;
  let template = '';

  attacks.forEach(attack => {
    if (attack.name == name) {
      template = attack.DescTemplate;
    }
  })
  descElem.innerHTML = template;
}
export default class AttackController {
  constructor() {
    console.log("The attack controller works!");
  }
  displayDescription(name) {
    _drawDesc(name);
  }
}