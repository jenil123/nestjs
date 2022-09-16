import { LoggerService, Inject, Injectable, Logger, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { PinoLogger } from "nestjs-pino";

@Injectable({ scope: Scope.REQUEST })
export default class MyLogger extends PinoLogger {

    constructor(@Inject(REQUEST) private readonly request: Request) {
        super({ renameContext: request.headers['x-request-id'] as string });
        // pinoLogger.setContext(request.headers['x-request-id'] as string)
        this.setContext(request.headers['x-request-id'] as string);
        // console.log(this.logger)
        // console.log('####################################################################################################')
        // this.previousLogger = this.logger

    }

    // getChildLogger(logger: PinoLogger) {
    //     this.logger = logger.logger.child({
    //         'x-request-id': this.request.headers['x-request-id'] as string,
    //     })
    // }

}