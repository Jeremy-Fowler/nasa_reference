import { appState } from "../AppState.js"
import { picturesService } from "../Services/PicturesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function _drawPictures() {
  let template = ''
  appState.pictures.forEach(p => template += p.CardTemplate)
  setHTML('pictures', template)
}

async function _getPictures() {
  try {
    await picturesService.getPictures()
  } catch (error) {
    console.error(error)
    Pop.error(error.message)
  }
}

export class SandboxController {
  constructor () {
    _getPictures()
    appState.on('pictures', _drawPictures)
  }

  async savePicture() {
    try {
      await picturesService.savePicture()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async removePicture(id) {
    if (await Pop.confirm()) {
      try {
        await picturesService.removePicture(id)
      } catch (error) {
        console.error(error)
        Pop.error(error.message)
      }
    }
  }

}