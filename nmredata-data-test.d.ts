import { PartialFileList } from "filelist-utils";

export async function getList(): Promise<string[]>;

export async function getFile(name: string): Promise<PartialFileList>;

export async function getFileListUnZip(name: string): Promise<PartialFileList>;

export async function getData(name: string): Promise<ArrayBuffer>;
