import { ConsoleLogger, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import { Logger, PinoLogger } from "nestjs-pino";
import MyLogger from "../toolbox/logger";

@Injectable()
export default class RequestResponseLogger implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        next()
    }
}