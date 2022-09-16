import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

declare global {
    namespace Express {
        interface Request {
            logger: any
        }
    }
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useLogger(app.get(Logger));
    const config = new DocumentBuilder()
        .setTitle('Todo example')
        .setDescription('The Todo API description')
        .setVersion('1.0')
        .addTag('Todo')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);

    await app.listen(9013);
}
bootstrap();
