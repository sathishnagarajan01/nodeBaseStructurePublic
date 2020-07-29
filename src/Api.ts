// import { Request, Response, NextFunction, Router } from 'express';
import { json, urlencoded } from 'body-parser';
import * as http from 'http';
import * as express from 'express';
import * as cors from 'cors';

import { BaseConfig } from './config/baseconfig';
import { envConfig } from './config/envconfig';
import { AppConfig } from './config/appconfig';
import { ApiRouting } from './router';
export class Api {

    public app: express.Express;
    private router: express.Router;
    private baseConfig: BaseConfig;
    private appConfig: AppConfig;

    constructor() {
        this.app        = express();
        this.router     = express.Router();
        this.baseConfig = envConfig.getConfig();
        this.appConfig  = this.baseConfig.appConfig();
        this.configureMiddleware();
        this.configureRoutes();
    }

    private configureMiddleware() {
        this.app.use(json({ limit: '50mb' }));
        this.app.use(urlencoded({ limit: '50mb', extended: true }));
        // this.app.use(logger);
        this.app.use(cors());
    }

    private configureRoutes() {
        this.app.use('/', this.router);
        ApiRouting.ConfigureRouters(this.app);
    }

    public run() {
        let server = http.createServer(this.app);
        server.listen(this.appConfig.port);
    }
}