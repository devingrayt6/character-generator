import ValuesController from "./Controllers/ValuesController.js";
import CharacterController from "./Controllers/CharacterController.js";
import MiscellaneousController from "./Controllers/MiscellaneousController.js"
import AttacksController from "./Controllers/AttacksController.js"

class App {
  valuesController = new ValuesController();
  characterController = new CharacterController();
  miscellaneousController = new MiscellaneousController();
  attackController = new AttacksController();
}

window["app"] = new App();
