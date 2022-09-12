import { DateController } from "./Controllers/DateController.js";
import { PicturesController } from "./Controllers/PicturesController.js";

class App {
  picturesController = new PicturesController()
  dateController = new DateController()
}

window["app"] = new App();
