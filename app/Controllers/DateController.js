import { picturesService } from "../Services/PicturesService.js"
import { Pop } from "../Utils/Pop.js"

function _setDate() {
  let date = new Date().toISOString().slice(0, 10)
  // @ts-ignore
  document.getElementById('date-picker').max = date
  // @ts-ignore
  document.getElementById('date-picker').value = date
}

export class DateController {
  constructor () {
    _setDate()
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