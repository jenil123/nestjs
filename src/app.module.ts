import { CacheModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import RequestResponseLogger from './middlewares/request-response-logger.middleware';
import { LoggerModule } from 'nestjs-pino';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseIntercepter } from './middlewares/response-interceptor';
import MyLogger from './toolbox/logger';
import { randomUUID } from 'crypto';

@Module({
    imports: [
        TodoModule,
        LoggerModule,
        MongooseModule.forRoot('mongodb://localhost/nest'),
        CacheModule.register({
            isGlobal: true,
        }),
        LoggerModule.forRoot({
            pinoHttp: {
                quietReqLogger: true,
                autoLogging: false,
                genReqId: (req) => (req && req.headers['x-request-id']) ?? randomUUID(),
                customAttributeKeys: {
                    reqId: 'x-request-id'
                },
            }
        }),
    ],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: ResponseIntercepter,
        },
        MyLogger,
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(RequestResponseLogger)
            .forRoutes('*');
    }
}
