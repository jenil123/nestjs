import { Inject } from "@nestjs/common";
import BaseService from "../services/base-service";
import { RedisCache } from "../toolbox/redis-cache.service";

export default function redisDecorator() {
    const injectYourService = Inject(RedisCache);
    return function (target: any,
        _propertyKey: string,
        descriptor: TypedPropertyDescriptor<any>) {
        const old = descriptor.value;
        injectYourService(target, 'redisCache')
        descriptor.value = async function (...arg: any[]) {
            const key = arg[0];
            const value = await this.redisCache.redisCache.get(key);
            if(value) {
                return JSON.parse(value);
            }
            const returnValue = await old.apply(this, arg);
            await this.redisCache.redisCache.set(key, JSON.stringify(returnValue));
            return returnValue;
        }
    }
}

// async hota hai ki ni, 