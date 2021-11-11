/**
 * @description Enum for the different api regions
 */
export enum ApiRegion {
  BR = 'BR',
  EUNE = 'EUN1',
  EUW = 'EUW1',
  JAPAN = 'JP1',
  KOREA = 'KR',
  LAN = 'LA1',
  LAS = 'LA2',
  NA = 'NA1',
  OC = 'OC1',
  TR = 'TR1',
  RU = 'RU',
}

/**
 * @description Enum for the different regions regarding static content
 */
export enum StaticContentRegion {
  BR = 'br',
  EUNE = 'eune',
  EUW = 'euw',
  JAPAN = 'jp',
  KOREA = 'kr',
  LAN = 'lan',
  LAS = 'las',
  NA = 'na',
  OC = 'oc',
  TR = 'tr',
  RU = 'ru',
}

/**
 * maps from a region to the corresponding static content region
 * @param region an API region
 * @returns a StaticContent region for the given API region
 */
export const mapToStaticContentRegion = (
  region: string,
): StaticContentRegion => {
  switch (region) {
    case ApiRegion.BR:
      return StaticContentRegion.BR;
    case ApiRegion.EUNE:
      return StaticContentRegion.EUNE;
    case ApiRegion.EUW:
      return StaticContentRegion.EUW;
    case ApiRegion.JAPAN:
      return StaticContentRegion.JAPAN;
    case ApiRegion.KOREA:
      return StaticContentRegion.KOREA;
    case ApiRegion.LAN:
      return StaticContentRegion.LAN;
    case ApiRegion.LAS:
      return StaticContentRegion.LAS;
    case ApiRegion.NA:
      return StaticContentRegion.NA;
    case ApiRegion.OC:
      return StaticContentRegion.OC;
    case ApiRegion.TR:
      return StaticContentRegion.TR;
    case ApiRegion.RU:
      return StaticContentRegion.RU;
    default:
      return StaticContentRegion.NA;
  }
};
