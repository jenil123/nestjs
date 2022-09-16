import { Module } from '@nestjs/common';
import MyLogger from '../toolbox/logger';

@Module({
    providers: [MyLogger],
    exports: [MyLogger],
})
export class LoggerModule { }