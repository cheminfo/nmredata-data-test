import { expect, test } from 'vitest';

import { testData } from '../index.js';

test('should provide nmredata files', async () => {
  await expect(testData.getFile('generated.zip')).resolves.toMatchObject({
    name: 'generated.zip',
    relativePath: 'generated.zip',
  });
});
