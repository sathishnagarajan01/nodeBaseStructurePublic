import { Request, Response, NextFunction, Router } from 'express';
export class DashboardController {
    public static baseRoute = '/dashboard';
    public router: Router = Router();

    constructor() {
        this.router.get('/helloworld', this.helloworld);
    }

    private helloworld(req: Request, res: Response, next: NextFunction) {
        res.status(200).send('Hello world');
    }
}