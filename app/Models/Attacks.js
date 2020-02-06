

export default class Attacks {
  constructor(data) {
    this.name = data.name,
      this.attack = data.attack,
      this.description = data.description,
      this.imgUrl = data.imgUrl
  }
  get DescTemplate() {
    /*html*/
    return `
    <img src="${this.imgUrl}" class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title">${this.name}</h5>
       <p class="card-text">${this.description}</p>
                  <a href="#" class="btn btn-primary">Equip attack</a>
      </div>
    `
  }
  get DropTemplate() {
    return `
    <a class="dropdown-item" onclick = "app.attackscontroller.displayDescription(${this.name})">${this.name}</a>`
  }
}