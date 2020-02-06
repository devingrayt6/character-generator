import _miscell from "../Services/MiscellaneousService.js"

function _draw() {
  console.log("draw function working")
}


export default class MiscellaneousController {
  constructor() {
    console.log("Miss controller working")
  }
  addAction(event) {
    event.preventDefault()

    let formData = event.target

    let newAction = {
      action: formData.action.value,
      description: formData.action.value,
    }
    _miscell.addAction(newAction)
    formData.reset()
    _draw()
  }

}