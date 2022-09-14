import { appState } from "../AppState.js"
import { picturesService } from "../Services/PicturesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"

function _drawPicture() {
  let picture = appState.picture
  document.querySelector('body').style.backgroundImage = `url(${picture.hdUrl})`
  // @ts-ignore
  document.getElementById('img-url').href = picture.hdUrl
  setHTML('picture-details', picture.DetailsTemplate)
  setText('copyright', picture.copyright)
  document.getElementById('like-icon').classList.toggle('text-danger', picture.FoundPicture)
}


export class NASAController {
  constructor () {
    appState.on('picture', _drawPicture)
    appState.on('pictures', _drawPicture)
    this.setDate()
  }
  setDate(date = new Date().toISOString().slice(0, 10)) {
    let datePicker = document.getElementById('date-picker')
    // @ts-ignore
    datePicker.max = date
    // @ts-ignore
    datePicker.value = date
    try {
      picturesService.getPicture(date)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
  async changeDate() {
    try {
      let form = window.event.target
      // @ts-ignore
      await picturesService.getPicture(form.value)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}