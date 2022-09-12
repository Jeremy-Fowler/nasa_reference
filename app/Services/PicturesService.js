import { appState } from "../AppState.js";
import { Picture } from "../Models/Picture.js";
import { nasaApi } from "./AxiosService.js"

class PicturesService {
  async getPicture(date = '') {
    const res = await nasaApi.get('', { params: { date } })
    console.log(res.data);
    appState.picture = new Picture(res.data)
  }

}

export const picturesService = new PicturesService()