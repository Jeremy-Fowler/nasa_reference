import { NASAController } from "./Controllers/NASAController.js";
import { SandboxController } from "./Controllers/SandboxController.js";

class App {
  nasaController = new NASAController()
  sandboxController = new SandboxController()
}

window["app"] = new App();
