import { fileListFromZip } from 'filelist-utils';

import { getData, getFile, getFileList, getFileListUnzip, getList } from '..';

describe('simple test', () => {
  const filename = 'generated.zip';
  it('check one name', async () => {
    const list = await getList();
    expect(list).toContain(filename);
  });
  it('getFileListUnZip', async () => {
    const fileList = await getFileListUnzip(filename);
    expect(fileList.map((file) => file.name)).toContain('nmredata.sdf');
  });
  it('getFile', async () => {
    const file = await getFile(filename);
    expect(file.name).toContain(filename);
  });
  it('getData', async () => {
    const file = await getData(filename);
    const fileList = await fileListFromZip(file);
    expect(fileList.map((file) => file.name)).toContain('nmredata.sdf');
  });
  it('getFileList', async () => {
    const fileList = await getFileList();
    expect(fileList.map((f) => f.name)).toContain(filename);
  });
});
