export class Picture {
  constructor (data) {
    this.date = data.date
    this.explanation = data.explanation
    this.hdUrl = data.hdurl
    this.url = data.url
    this.title = data.title
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
}