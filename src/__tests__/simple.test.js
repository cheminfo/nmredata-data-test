import { fileListFromZip } from 'filelist-utils';

import { getData, getFileList, getList } from '..';

describe('simple test', () => {
  it('check one name', async () => {
    const list = await getList();

    expect(list).toContain('generated.zip');
  });
  it('getFileList', async () => {
    const fileList = await getFileList('generated.zip');
    expect(fileList.map((file) => file.name)).toContain('nmredata.sdf');
  });
  it('getData', async () => {
    const file = await getData('generated.zip');
    const fileList = await fileListFromZip(file);
    expect(fileList.map((file) => file.name)).toContain('nmredata.sdf');
  });
});
