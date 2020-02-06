import ValuesController from "./Controllers/ValuesController.js";
import AttacksController from "./Controllers/AttacksController.js";
import AttackController from "./Controllers/AttacksController.js";
class App {
  valuesController = new ValuesController();
  attacksController = new AttackController();
}

window["app"] = new App();
