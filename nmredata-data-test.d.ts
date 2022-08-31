import { PartialFile, PartialFileList } from "filelist-utils";

export function getList(): Promise<string[]>;

export function getFile(name: string): Promise<PartialFile>;

export function getFileListUnZip(name: string): Promise<PartialFileList>;

export function getData(name: string): Promise<ArrayBuffer>;
