export interface VersionInfo {
    item: string;
    rune: string;
    mastery: string;
    summoner: string;
    champion: string;
    profileicon: string;
    map: string;
    language: string;
    sticker: string;
}

/**
 * Interface to represent a region version
 */
export interface RegionVersion {
    n: VersionInfo;
    v: string;
    l: string;
    cdn: string;
    dd: string;
    lg: string;
    css: string;
    profileiconmax: number;
    store?: any;
}