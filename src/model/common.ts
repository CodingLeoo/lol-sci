export interface DataHolder<T> {
    [key: string]: T;
  }

  /**
   * @description represents an image asset
   */
export interface Image {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  }