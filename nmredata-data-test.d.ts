import { PartialFileList } from "filelist-utils";

export async function getList(): Promise<string[]>;

export async function getFileList(name: string): Promise<PartialFileList>;

export async function getData(name: string): Promise<ArrayBuffer>;
