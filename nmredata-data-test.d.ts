import { FileCollectionItem, FileCollection } from 'filelist-utils';

export function getList(): Promise<string[]>;

export function getFile(name: string): Promise<FileCollectionItem>;

export function getFileCollectionUnZip(name: string): Promise<FileCollection>;

export function getData(name: string): Promise<ArrayBuffer>;
