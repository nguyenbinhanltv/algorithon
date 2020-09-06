import { Router } from 'express';

class UsersRoutes {
  public routes: Router;

  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.get('/', (req, res) => { });
    this.routes.post('/', (req, res) => { });
    this.routes.get('/data', (req, res) => { });
  }
}

const usersRoutes = new UsersRoutes().routes;
export { usersRoutes }