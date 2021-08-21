// const fs = require('fs')
// fs.read

const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


// if node cant find the file. node will automatically make it for you
writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    //flag is to reflip the content
    {flag: 'a'}
)

console.log('done with this task');
console.log('starting the next one');

