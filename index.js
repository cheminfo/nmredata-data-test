const { readFileSync } = require("fs");
const { join } = require("path");

const toc = JSON.parse(readFileSync(join(__dirname, 'toc.json')));
let nmredata = {};
for (let file of toc){
  let name = file.filename;
  nmredata[name] = readFileSync(join(__dirname, file.url), 'base64').toString();
}
module.exports = {
  nmredata,
};

