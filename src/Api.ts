import { Request, Response, NextFunction, Router } from 'express';
import { json, urlencoded } from 'body-parser';
import * as http from 'http';
import * as express from 'express';
import * as cors from 'cors';

import { ResponseApi } from './response/responseApi';
import { BaseConfig } from './config/baseconfig';
import { envConfig } from './config/envconfig';
import { AppConfig } from './config/appconfig';
import { ApiRouting } from './router';
import { getMaxListeners } from 'process';
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
        this.configureUnAuthRoutes();
        this.authenticateRequest(this.app); // after this method call, each request need header
        this.configureRoutes();
    }

    private authenticateRequest(app) {
        app.use(async (req, res, next) => {
            if (req.url === '/') {
                res.json({
                    name: "Astrology Complete Reference",
                    version: "1.0.0",
                    Author: "Sathish Kumar Nagarajan <nsathishkumarct@gmail.com>"
                });
            } else {
                let auth = req.headers["token"];
                if(auth) {
                    console.log('authenticate header token');
                    next();
                } else {
                    ResponseApi.unauthorized(req, res);
                }
            }
        });
    }

    private configureMiddleware() {
        this.app.use(json({ limit: '50mb' }));
        this.app.use(urlencoded({ limit: '50mb', extended: true }));
        // this.app.use(logger);
        this.app.use(cors());
    }

    private configureUnAuthRoutes() {
        // Here we can write like swagger or any other non token router
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