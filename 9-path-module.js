const path = require('path')


console.log(path.sep)

// will combine the path address /content/subfolder/test.txt
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

//main file test.txt
const base = path.basename(filePath)
console.log(base)

// absoulute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)