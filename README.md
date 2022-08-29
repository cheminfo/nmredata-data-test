# nmredata-data-test

provides zipped nmrRecord data files for testing purposes.

## usage

```js
import { nmredata } from 'nmredata-data-test';
console.log(Ohject.keys(nmredata)); // to get a list
console.log(nmredata['androstene.zip']); // to get a string with nmrRecord data

import { getData, getFileList, getList } from "nmredata-data-test";
console.log(getList()); // to get a promise of a list of file names
console.log(getFileList("androstene.zip")); // to get a promise of an array of fileList (content of the nmrRecord).
const buffer = getData("androstene.zip"); // to get a promise of the arrayBuffer of the file.
```
