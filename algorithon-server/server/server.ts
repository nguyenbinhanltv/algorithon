import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

//Routes
import { appRoutes } from './routes/app.routes';

const PORT = process.env.PORT || 3000;

class ExpressApp {
  public app: express.Application;

  constructor() {
    this.app = express();

  }

  private _init() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }
}

const app = new ExpressApp().app;

app.use(appRoutes);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));