import { Injectable } from "@nestjs/common";
import Redis from "ioredis";
import redisDecorator from "../decorators/redis.decorator";

@Injectable()
export class RedisCache {

    protected redisCache: Redis;
    constructor() {
        this.redisCache = new Redis({
            port: 6379,
            host: 'localhost',
        })
    }

    async get(key: string) {
        return this.redisCache.get(key);
    }

    async set(key: string, value: any) {
        return this.redisCache.set(key, value);
    }
}

// redis, logger, middleware(request-response-logger, response-handler, authentication), exception filter, config, resources.ts