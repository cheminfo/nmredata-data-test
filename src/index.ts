import { join } from 'node:path';

import init from 'data-test-api';

const DATA_PATH = join(import.meta.dirname, '../data/');

export const testData = init(DATA_PATH);
