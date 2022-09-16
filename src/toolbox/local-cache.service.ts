import { CACHE_KEY_METADATA, CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from 'cache-manager';

@Injectable()
export class LocalCache {
    constructor(@Inject(CACHE_MANAGER) private readonly localCache: Cache) {
    }

    async get(key: string) {
        return this.localCache.get(key);
    }
}