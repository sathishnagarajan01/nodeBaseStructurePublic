import * as express from 'express';
import { DashboardController } from './controller/dashboard.controller';

export class ApiRouting {
    constructor() {}

    public static ConfigureRouters(app: express.Express) {
        app.use(DashboardController.baseRoute, new DashboardController().router);
    }
}