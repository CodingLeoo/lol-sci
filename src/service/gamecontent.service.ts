import { Inject, Injectable, Logger } from '@nestjs/common';
import { Model } from 'mongoose';
import { STATIC_RESOURCE_MODEL } from '../constants/providers';
import { ChampionsData } from '../model/champion.resource';
import { StaticResource } from '../model/static.resource';

@Injectable()
export class GameContentService {
  private readonly logger = new Logger(GameContentService.name);

  constructor(
    @Inject(STATIC_RESOURCE_MODEL)
    private readonly model: Model<StaticResource<ChampionsData>>,
  ) {}

  getChampion(id: string): void {
    this.logger.log(`getChampion ${id}`);
  }
}
