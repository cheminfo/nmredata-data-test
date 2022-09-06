# nmredata-data-test

provides zipped nmrRecord data files for testing purposes.

## usage

```js
import { getData, getFile, getList, getFileListUnZip } from "nmredata-data-test";

const listOfFilenames = await getList();

const filename = "androstene.zip";
const file = await getFile(filename); //PartialFile of the zip file (nmrRecord).
const fileList = await getFileListUnZip(filename); //PartialFileList of the unzipped file.
const buffer = await getData(filename); //arrayBuffer of the file
```
