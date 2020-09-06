import { Router } from 'express';
import { usersRoutes } from './users/users.routes';
import { itemsRoutes } from './items/items.routes';

class AppRoutes {
  public routes: Router;
  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.use('/users', usersRoutes);
    this.routes.use('/items', itemsRoutes);
  }
}

const appRoutes = new AppRoutes().routes;
export { appRoutes };
