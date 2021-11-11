import { Module } from '@nestjs/common';
import { Connection } from 'mongoose';
import {
  DATABASE_CONNECTION,
  STATIC_RESOURCE_MODEL,
} from './constants/providers';
import { staticResource } from './schema/static-resource.schema';
import { CacheService } from './service/cache.service';
import { GameContentService } from './service/gamecontent.service';
import { InterpreterService } from './service/interpreter.service';
import { StaticContentService } from './service/staticcontent.service';

@Module({
  providers: [
    {
      provide: STATIC_RESOURCE_MODEL,
      inject: [DATABASE_CONNECTION],
      useFactory: (connection: Connection) =>
        connection.model('StaticResource', staticResource),
    },
    CacheService,
    GameContentService,
    InterpreterService,
    StaticContentService,
  ],
  exports: [GameContentService],
})
export class StaticResourcesModule {}
