import ValuesController from "./Controllers/ValuesController.js";
import CharacterController from "./Controllers/CharacterController.js";
import MiscellaneousController from "./Controllers/MiscellaneousController.js"

class App {
  valuesController = new ValuesController();
  characterController = new CharacterController();
  miscellaneousController = new MiscellaneousController();
}

window["app"] = new App();
