import { Router } from "express";

//Controller
import { getLanguages } from "../../controllers/languages/langs.controller";

class LangsRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.get("/", getLanguages);
  }
}

export const langsRoutes = new LangsRoutes().routes;
