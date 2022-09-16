import { CACHE_MANAGER, Inject } from "@nestjs/common";
import { NestApplicationContextOptions } from "@nestjs/common/interfaces/nest-application-context-options.interface";
import { Cache } from "cache-manager";
import { Request } from "express";
import { Document, Model } from "mongoose";
import redisDecorator from "../decorators/redis.decorator";
import { RedisCache } from "../toolbox/redis-cache.service";
import { Logger, PinoLogger } from 'nestjs-pino';
import MyLogger from "../toolbox/logger";

export default class BaseService {
    protected model: Model<Document>;

    protected request: Request;


    constructor(props: {
        model: Model<Document>;
        request: Request
    }, public redisCache: RedisCache,
        public localCache: Cache,
        public readonly logger: PinoLogger,
    ) {
        this.model = props.model;
        this.request = props.request;
    }

    @redisDecorator()
    public async findOne(id: string) {
        const data = await this.model.findById(id).exec();
        return data;
    }


    public findAll() {
        return this.model.find().exec();
    }

    public create<T>(data: T) {
        return this.model.create(data);
    }

    public updateOne<T>(id: string, data: T) {
        return this.model.findByIdAndUpdate(id, data);
    }

    public paginatedSearchAndCount<T>(id: string, data: T) {
        return this.model.findByIdAndUpdate(id, data);
    }

    public createMany<T>(data: T[]) {
        return this.model.insertMany(data);
    }
}