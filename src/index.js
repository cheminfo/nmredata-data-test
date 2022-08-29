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

export async function getFileList(name) {
  const files = await loadFileList(path);
  const result = files.filter((d) => d.name === name);

  if (result.length < 1) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return fileListUnzip(result);
}

export async function getData(name) {
  const files = await loadFileList(path);
  const result = files.filter((d) => d.name === name);
  return result[0].arrayBuffer();
}
