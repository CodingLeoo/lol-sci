import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { Redis } from 'ioredis';

@Injectable()
export class CacheService {
  private client: Redis;
  private readonly logger = new Logger(CacheService.name);

  constructor(private readonly redisService: RedisService) {
    this.client = this.redisService.getClient();
  }

  /**
   * gets a key from redis with a given type
   * @param key the key to be fetched
   * @returns the value of the key if found or not expired , or else undefined
   */
  public async get<T>(key: string): Promise<T> {
    const stringValue = await this.client.get(key);
    if (!stringValue) {
      return null;
    }
    return JSON.parse(stringValue) as T;
  }

  /**
   * sets a key in redis with a given type and expiration time in seconds
   * @param key the key to be set
   * @param value the value to be set
   * @param ttl the time to live in seconds
   */
  public async set<T>(key: string, value: T, ttl: number): Promise<void> {
    await this.client.set(key, JSON.stringify(value), 'EX', ttl);
  }
}
