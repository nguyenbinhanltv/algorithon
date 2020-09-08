import { Router } from "express";

//Routes
import { usersRoutes } from "./users/users.routes";
import { itemsRoutes } from "./items/items.routes";
import { langsRoutes } from "./languages/langs.routes";
import { runRoutes } from "./run/run.routes";

class AppRoutes {
  public routes: Router;
  constructor() {
    this.routes = Router();
    this._init();
  }

  private _init() {
    this.routes.use("/users", usersRoutes);
    this.routes.use("/items", itemsRoutes);
    this.routes.use("/langs", langsRoutes);
    this.routes.use("/run", runRoutes);
  }
}

export const appRoutes = new AppRoutes().routes;
