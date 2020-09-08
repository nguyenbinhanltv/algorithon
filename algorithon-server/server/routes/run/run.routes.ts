import { Router } from 'express';

//Controller
import { runCompiler } from '../../controllers/run/run.controller';

class RunRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.post('/', runCompiler);
  }
}

export const runRoutes = new RunRoutes().routes;