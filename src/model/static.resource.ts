import { DataHolder } from './common';

export interface StaticResource<T>{
    type: string;
    format?: string;
    version: string;
    data: DataHolder<T>;
}