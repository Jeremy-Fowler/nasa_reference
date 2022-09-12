import { appState } from "../AppState.js"
import { picturesService } from "../Services/PicturesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

async function _getPicture() {
  try {
    await picturesService.getPicture()
  } catch (error) {
    console.error(error)
    Pop.error(error.message)
  }
}

function _drawPicture() {
  let picture = appState.picture
  document.querySelector('body').style.backgroundImage = `url(${picture.hdUrl})`
  // @ts-ignore
  document.getElementById('img-url').href = picture.hdUrl
  setHTML('picture-details', picture.DetailsTemplate)
  setHTML('copyright', picture.copyright)
}

export class PicturesController {
  constructor () {
    _getPicture()
    appState.on('picture', _drawPicture)
  }
}