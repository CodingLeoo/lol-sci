import { DataHolder, Image } from './common';
import { StaticResource } from './static.resource';

/**
 * @description Interface to represent a summoner spell
 */
export interface SummonerSpell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: DataHolder<any>;
  effect: number[][];
  effectBurn: string[];
  vars: any[];
  key: string;
  summonerLevel: number;
  modes: string[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}


/**
 * @description Summoner spells mongoose model type
 */
 export type sumonerSpellsData = StaticResource<SummonerSpell> & Document;
