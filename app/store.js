import Value from "./Models/Value.js";
import Attacks from "./Models/Attacks.js"

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /** @type {Attacks[]} */
  attacks: [],
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
