// CommonJS, every file is mode (by default)
//modules - encapsulated code (only share minimum)

// to access the module.export
const names = require('./export/4-names')
const sayHi = require('./export/5-utils')
const data = require('./export/6-alternative-flavor')
require('./export/7-mind-granade')



sayHi('susan')
sayHi(names.john)
sayHi(names.peter)