import { CACHE_MANAGER, Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model } from 'mongoose';
import { RedisCache } from '../../toolbox/redis-cache.service';
import { Todo, TodoDocument } from '../../schemas/todo/todo-schema';
import BaseService from '../base-service';
import { Cache } from 'cache-manager';
import { Logger, PinoLogger } from 'nestjs-pino';
import MyLogger from '../../toolbox/logger';

@Injectable({ scope: Scope.REQUEST })
export class TodoService extends BaseService {

    constructor(@InjectModel(Todo.name) protected readonly model: Model<TodoDocument>, @Inject(REQUEST) public request: Request, public redisCache: RedisCache, @Inject(CACHE_MANAGER) public localCache: Cache, public readonly logger: PinoLogger,
    ) {
        super({ model, request }, redisCache, localCache, logger);
    }
}
