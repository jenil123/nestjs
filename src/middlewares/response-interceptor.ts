import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger, ConsoleLogger } from "@nestjs/common";
import { PinoLogger } from "nestjs-pino";
import { map, tap } from "rxjs";

@Injectable()
export class ResponseIntercepter implements NestInterceptor {

    intercept(context: ExecutionContext, next: CallHandler) {
        const res = context.switchToHttp().getResponse();

        return next.handle().pipe(
            map((data) => {
                return {
                    statusCode: res.statusCode,
                    data,
                }
            })
        );
    }
}