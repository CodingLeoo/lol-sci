import { Image } from './common';
import { StaticResource } from './static.resource';

/**
 * @description Champion general information.
 */
export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

/**
 * @description Champion stats
 */
export interface Stats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

/**
 * @description Champion resource
 */
export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: string[];
  partype: string;
  stats: Stats;
}

/**
 * @description Champions data mongoose model type
 */
export type ChampionsData = StaticResource<Champion> & Document;
