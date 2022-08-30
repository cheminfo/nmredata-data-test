import { join } from 'path';

import { fileListFromPath, fileListUnzip } from 'filelist-utils';

const path = join(__dirname, '../data/');

const cache = {};

async function loadFileList(path) {
  if (cache[path]) {
    return cache[path];
  }

  cache[path] = await fileListFromPath(path, {
    unzip: { zipExtensions: [] },
    ungzip: { gzipExtensions: [] },
  });

  return cache[path];
}

export async function getList() {
  const files = await loadFileList(path);
  return files.map((d) => d.name);
}

export async function getFile(name) {
  const files = await loadFileList(path);
  const result = files.find((d) => d.name === name);

  if (!result) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return result;
}

export function getFileList() {
  return loadFileList(path);
}

export function getFileListUnzip(name) {
  return getFile(name).then((file) => fileListUnzip([file]));
}

export async function getData(name) {
  const files = await loadFileList(path);
  const result = files.find((d) => d.name === name);
  return result.arrayBuffer();
}
