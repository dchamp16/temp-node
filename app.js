// np 0 global comman, come with node
// npm --version

//local dependency - use it only in this particular project
// npm i<packageName>

//global dependecy - use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName>(mac)

//package.json - manifest file (VERY IMPORTANT stores important info about project/package) << this will create with the npm init (manual) npm init -y(will automatic create for you) 
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init - (everything default)

//npm i nodemon -D - to install nodemon
// "scripts": {"start": "node app.js"}, - do it in package.json
// sudo npm install -g <packageName> nodemon - install it in local terminal to globally work

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log('really');

