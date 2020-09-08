import { Router } from 'express';

class LangsRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.get('/', (req, res) => { });
  }
}

const langsRoutes = new LangsRoutes().routes;
export { langsRoutes }