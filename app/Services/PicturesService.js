import { appState } from "../AppState.js";
import { Picture } from "../Models/Picture.js";
import { Pop } from "../Utils/Pop.js";
import { nasaApi, sandboxApi } from "./AxiosService.js"

class PicturesService {
  async removePicture(id) {
    const res = await sandboxApi.delete('api/jerms/apods/' + id)
    console.log(res.data);
    appState.pictures = appState.pictures.filter(p => p.id !== id)
  }
  async getPictures() {
    const res = await sandboxApi.get('api/jerms/apods')
    console.log(res.data);
    appState.pictures = res.data.map(p => new Picture(p))
  }
  async savePicture() {
    let picture = appState.picture
    if (picture.FoundPicture) {
      Pop.toast('You have already saved this picture!', 'info')
      return
    }
    const res = await sandboxApi.post('api/jerms/apods', picture)
    console.log(res.data);
    appState.pictures = [...appState.pictures, new Picture(res.data)]
  }
  async getPicture(date = '') {
    const res = await nasaApi.get('', { params: { date } })
    console.log(res.data);
    appState.picture = new Picture(res.data)
  }

}

export const picturesService = new PicturesService()