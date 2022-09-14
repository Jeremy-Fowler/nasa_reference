import { appState } from "../AppState.js"

export class Picture {
  constructor (data) {
    this.id = data.id || null
    this.date = data.date
    this.explanation = data.explanation || ''
    this.hdUrl = data.hdurl || ''
    this.imgUrl = data.url || data.imgUrl
    this.title = data.title || ''
    this.copyright = data.copyright || 'NASA'
  }

  get DetailsTemplate() {
    return /*html*/`
    <div class="col-12 col-md-8 roboto text-shadow">
      <h1>${this.title}</h1>
      <h2 class="my-3">${this.date}</h2>
      <p class="on-hover">${this.explanation}</p>
    </div>
    `
  }

  get CardTemplate() {
    return /*html*/`
    <div class="col-12 mb-3 picture-card">
      <img src="${this.imgUrl}" alt="" class="img-fluid rounded">
      <div class="title  text-shadow ms-2 d-flex align-items-center justify-content-end">
        <span class="selectable fw-bold" onclick="app.nasaController.setDate('${this.date}')" >${this.date}</span>
        <i onclick="app.sandboxController.removePicture('${this.id}')" class="mdi mdi-close ms-2 selectable fs-4" title="Remove Image"></i>
      </div>
    </div>
    `
  }

  get FoundPicture() {
    return appState.pictures.find(p => p.date == this.date) ? true : false
  }

}