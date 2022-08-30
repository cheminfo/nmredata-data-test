# nmredata-data-test

provides zipped nmrRecord data files for testing purposes.

## usage

```js
import { getData, getFileList, getList } from "nmredata-data-test";

const listOfFilenames = await getList();

const filename = "androstene.zip";
const fileList = await getFileList(filename); //PartialFileList of the unzipped file.
const buffer = await getData(filename); //arrayBuffer of the file
```
