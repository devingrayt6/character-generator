import _attackService from "../Services/AttacksService.js"
import _store from "../store.js"
/*NOTE This is just supposed to draw the attacks in a dropdown menu from bootstrap,
then if you click on one it'll show a description card. It has the structure to 
equip attacks like spells to the character eventually. */
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