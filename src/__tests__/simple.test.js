import { fileCollectionFromZip } from 'filelist-utils';

import {
  getData,
  getFile,
  getFileCollection,
  getFileCollectionUnzip,
  getList,
} from '..';

describe('simple test', () => {
  const filename = 'generated.zip';
  it('check one name', async () => {
    const list = await getList();
    expect(list).toContain(filename);
  });
  it('fileCollectionUnzip', async () => {
    const fileCollection = await getFileCollectionUnzip(filename);
    expect(fileCollection.files.map((file) => file.name)).toContain(
      'nmredata.sdf',
    );
  });
  it('getFile', async () => {
    const file = await getFile(filename);
    expect(file.name).toContain(filename);
  });
  it('getData', async () => {
    const file = await getData(filename);
    const fileCollection = await fileCollectionFromZip(file);
    expect(fileCollection.files.map((file) => file.name)).toContain(
      'nmredata.sdf',
    );
  });
  it('fileCollection', async () => {
    const fileCollection = await getFileCollection();
    expect(fileCollection.files.map((f) => f.name)).toContain(filename);
  });
});
