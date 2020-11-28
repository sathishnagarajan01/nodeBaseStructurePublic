import { Request, Response, NextFunction, Router } from 'express';
import { ResponseApi } from '../response/responseApi';
export class DashboardController {
    public static baseRoute = '/dashboard';
    public router: Router = Router();

    constructor() {
        this.router.get('/helloworld', this.helloworld);
    }

    private helloworld(req: Request, res: Response, next: NextFunction) {
        ResponseApi.ok(req, res, 'Hello World');
    }
}