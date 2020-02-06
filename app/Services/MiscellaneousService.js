import Miscellaneous from "../Models/Miscellaneous.js"
import _store from "../store.js"

class MiscellaneousService {
  addAction(newAdd) {
    newAdd = new Miscellaneous(newAdd)
    console.log("Miss service up")
    _store.State.miss.push(newAdd)
  }
}

const MISSERVE = new MiscellaneousService()
export default MISSERVE