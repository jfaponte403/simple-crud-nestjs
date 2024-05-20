import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response} from "supertest";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: () => void) {

        console.log('middleware', req.url)

        next();
    }
}
