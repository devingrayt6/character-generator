import ValuesController from "./Controllers/ValuesController.js";
import CharacterController from "./Controllers/CharacterController.js"

class App {
  valuesController = new ValuesController();
  characterController = new CharacterController();
}

window["app"] = new App();
