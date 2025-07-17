# nmredata-data-test

Provides zipped nmrRecord data files for testing purposes.

## usage

```js
import { testData } from 'nmredata-data-test';

const listOfFiles = await testData.files();

const filename = 'androstene.zip';
const file = await testData.getFile(filename);
const buffer = await file.buffer();
```
