import { DataHolder, Image } from './common';
import { StaticResource } from './static.resource';

export interface Gold {
  base: number;
  purchasable: boolean;
  total: number;
  sell: number;
}

export interface Group {
  id: string;
  MaxGroupOwnable: string;
}

export interface Tree {
  header: string;
  tags: string[];
}

export interface Rune {
  isrune: boolean;
  tier: number;
  type: string;
}

export interface Basic {
  name: string;
  rune: Rune;
  gold: Gold;
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stacks: number;
  depth: number;
  consumeOnFull: boolean;
  from: any[];
  into: any[];
  specialRecipe: number;
  inStore: boolean;
  hideFromAll: boolean;
  requiredChampion: string;
  requiredAlly: string;
  stats: DataHolder<number>;
  tags: any[];
  maps: DataHolder<boolean>;
}

/**
 * @description Item resource
 */
export interface Item {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  from: string[];
  image: Image;
  gold: Gold;
  tags: string[];
  maps: DataHolder<boolean>;
  stats: DataHolder<number>;
  depth: number;
}

/**
 * @description interface representing the item data
 */
export interface ItemResource extends StaticResource<Item> {
  basic: Basic;
  groups: Group[];
  tree: Tree[];
}

/**
 * @description Items mongoose model type
 */
export type ItemsData = ItemResource & Document;
