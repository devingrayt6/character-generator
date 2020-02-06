import Value from "./Models/Value.js";
import Miss from "./Models/Miscellaneous.js"

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  /**@type {Miss[]} */
  Miss: []
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
