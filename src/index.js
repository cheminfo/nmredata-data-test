import { join } from 'path';

import { fileCollectionFromPath, fileCollectionFromZip } from 'filelist-utils';

const path = join(__dirname, '../data/');

const cache = {};

async function loadFileCollection(path) {
  if (cache[path]) {
    return cache[path];
  }

  cache[path] = await fileCollectionFromPath(path, {
    unzip: { zipExtensions: [] },
    ungzip: { gzipExtensions: [] },
  });

  return cache[path];
}

export async function getList() {
  const fileCollection = await loadFileCollection(path);
  return fileCollection.files.map((d) => d.name);
}

export async function getFile(name) {
  const fileCollection = await loadFileCollection(path);
  const result = fileCollection.files.find((d) => d.name === name);

  if (!result) {
    throw new Error(`There is not a file with name: ${name}`);
  }

  return result;
}

export function getFileCollection() {
  return loadFileCollection(path);
}

export function getFileCollectionUnzip(name) {
  return getData(name).then((file) => fileCollectionFromZip(file));
}

export async function getData(name) {
  const fileCollection = await loadFileCollection(path);
  const result = fileCollection.files.find((d) => d.name === name);
  return result.arrayBuffer();
}
